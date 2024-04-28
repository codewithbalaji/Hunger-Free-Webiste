import { useState, useEffect } from 'react';
import { collection, deleteDoc, doc, getDocs,  } from 'firebase/firestore';
import { db } from "../firebase";
import NavDash from '../Dashboard/NavDash';
import { useUsers } from './DashPage';

const DashPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { users, isLoadingUsers } = useUsers(); // Assuming useUsers hook fetches all users

 
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsRef = collection(db, 'posts');
        const snapshot = await getDocs(postsRef);
        const postData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPosts(postData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const getUsername = (uid) => {
    const user = users.find(user => user.id === uid);
    return user ? user.username : 'User Not Found';
  };

  const handleDeletePost = async (postId) => {
    try {
      await deleteDoc(doc(db, 'posts', postId));
      setPosts(posts.filter(post => post.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  if(isLoadingUsers) return "loading...."

  return (
    <>
      <NavDash />
      <div className="container mt-5">
        <h2>All Posts</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="row mt-3">
            {posts.map(post => (
              <div key={post.id} className="col-md-4 mb-4">
                <div className="card">
                  {post.image ? (
                    <img src={post.image} className="card-img-top" alt="Post Image" width={"400px"} height={"400px"} />
                  ) : (
                    <img src="https://placehold.co/400" className="card-img-top" alt="Placeholder" width={"400px"} height={"400px"} />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">User: {getUsername(post.uid)}</h5>
                    <p className="card-text">{post.text}</p>
                    <p className="card-text">{post.content}</p>
                    <button className="btn btn-danger" onClick={() => handleDeletePost(post.id)}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default DashPosts;
