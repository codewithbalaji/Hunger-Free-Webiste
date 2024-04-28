import './DashPage.css'; // Import CSS file for custom styling
import { collection } from 'firebase/firestore';
import { db } from "../firebase";
import {
  useCollectionData,
} from "react-firebase-hooks/firestore";
import img1 from "../assets/contribution.png"
import img2 from "../assets/volunteer.png"
import img3 from "../assets/food-donation.png"
import img4 from "../assets/new-user.png"
import { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';

export function useUsers() {
  const [users, isLoading] = useCollectionData(collection(db, "users"));
  return { users, isLoading };
}

export function usePosts() {
  const [posts, isLoadingPosts] = useCollectionData(collection(db, "posts"));
  return { posts, isLoadingPosts };
}

const DashPage = () => {

  const { users, isLoading } = useUsers();
  const { posts, isLoadingPosts } = usePosts();

  const [contributor, setContributor] = useState(0);
  const [volunteer, setVolunteer] = useState(0);
  const [food, setFood] = useState(0);
  const [newUsers, setNewUsers] = useState(0); // State for new users count

  const chartRef = useRef(null);

  useEffect(() => {
    if (!isLoading && users) {
      let contributorCount = 0;
      let volunteerCount = 0;
      let todayUsersCount = 0; // Initialize count for new users today

      // Iterate through users to count contributors, volunteers, and new users for today
      users.forEach(user => {
        if (user.role === "contributor") {
          contributorCount++;
        } else if (user.role === "volunteer") {
          volunteerCount++;
        }

        // Check if the user joined today
        const userDate = new Date(user.date).toISOString().split('T')[0];
        const today = new Date().toISOString().split('T')[0];
        if (userDate === today) {
          todayUsersCount++;
        }
      });

      setContributor(contributorCount);
      setVolunteer(volunteerCount);
      setNewUsers(todayUsersCount); // Set the count of new users for today

      // Calculate data for the chart
      const userData = users.map(user => ({
        date: new Date(user.date), // Convert the timestamp to a Date object
        count: 1
      }));

      const dataByDate = userData.reduce((acc, curr) => {
        const dateKey = curr.date.toISOString().split('T')[0];
        if (!acc[dateKey]) {
          acc[dateKey] = 0;
        }
        acc[dateKey]++;
        return acc;
      }, {});

      const labels = Object.keys(dataByDate);
      const data = Object.values(dataByDate);

      // Create or update the chart
      if (chartRef.current) {
        const ctx = chartRef.current.getContext('2d');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels,
            datasets: [{
              label: 'Users Joined',
              data,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
          }
        });
      }
    }
  }, [isLoading, users]);

  useEffect(() => {
    if (!isLoadingPosts && posts) {
      let foodDonationCount = 0;
      // Iterate through posts to count food donations
      posts.forEach(post => {
        if (post.request === true) {
          foodDonationCount++;
        }
      });
      setFood(foodDonationCount);
    }
  }, [isLoadingPosts, posts]);

  if (isLoading || isLoadingPosts) return "Loading...";

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="card h-100 d-flex flex-row">
            <img
              src={img1}
              className="card-img-top align-self-start rounded-circle"
              alt="Placeholder"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Contributor</h5>
              <p className="card-text text-center" style={{ fontSize: "90px" }}>{contributor}</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="card h-100 d-flex flex-row">
            <img
              src={img2}
              className="card-img-top align-self-start rounded-circle"
              alt="Placeholder"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Volunteer</h5>
              <p className="card-text text-center" style={{ fontSize: "90px" }}>{volunteer}</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="card h-100 d-flex flex-row">
            <img
              src={img3}
              className="card-img-top align-self-start rounded-circle"
              alt="Placeholder"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Food Donated</h5>
              <p className="card-text text-center" style={{ fontSize: "90px" }}>{food}</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4"> 
          <div className="card d-flex flex-row">
            <img
              src={img4}
              className="card-img-top align-self-start rounded-circle"
              alt="Placeholder"
            />
            <div className="card-body">
              <h5 className="card-title text-center">New Users</h5>
              <p className="card-text text-center" style={{ fontSize: "90px" }}>{newUsers}</p>
            </div>
          </div>
        </div>

        <div className="col-lg-8 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <canvas ref={chartRef}></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashPage;
