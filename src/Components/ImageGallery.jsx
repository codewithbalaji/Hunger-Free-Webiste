import  { useState } from "react";
import { Modal, Container, Row, Col } from "react-bootstrap";
import img1 from "../assets/help1.jpg"; 
import img2 from "../assets/img2.jpg"; 
import img3 from "../assets/img3.jpg"; 
import img4 from "../assets/img9.jpg"; 
import img5 from "../assets/img5.jpg"; 
import img6 from "../assets/img6.jpg"; 
import img7 from "../assets/img7.jpg"; 
import img8 from "../assets/img8.jpg"; 
 

const ImageGallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div className="image-gallery-container">
      <Container>
        <h2 className="text-center mt-3">Gallery View</h2>
        <Row className="mt-4">
          <Col xs={6} md={3} className="image-item" onClick={() => handleImageClick(img1)}>
            <img src={img1} alt="Image 1" className="img-fluid gallery-image" style={{ width: '100%', height: '200px' }} />
          </Col>
          <Col xs={6} md={3} className="image-item" onClick={() => handleImageClick(img2)}>
            <img src={img2} alt="Image 2" className="img-fluid gallery-image"  style={{ width: '100%', height: '200px' }}/>
          </Col>
          <Col xs={6} md={3} className="image-item" onClick={() => handleImageClick(img3)}>
            <img src={img3} alt="Image 3" className="img-fluid gallery-image"  style={{ width: '100%', height: '200px' }}/>
          </Col>
          <Col xs={6} md={3} className="image-item" onClick={() => handleImageClick(img4)}>
            <img src={img4} alt="Image 4" className="img-fluid gallery-image"  style={{ width: '100%', height: '200px' }}/>
          </Col>
          
          <Col xs={6} md={3} className="image-item" onClick={() => handleImageClick(img5)}>
            <img src={img5} alt="Image 5" className="img-fluid gallery-image"  style={{ width: '100%', height: '200px' }}/>
          </Col>
          <Col xs={6} md={3} className="image-item" onClick={() => handleImageClick(img6)}>
            <img src={img6} alt="Image 6" className="img-fluid gallery-image"  style={{ width: '100%', height: '200px' }}/>
          </Col>
          <Col xs={6} md={3} className="image-item" onClick={() => handleImageClick(img7)}>
            <img src={img7} alt="Image 7" className="img-fluid gallery-image" style={{ width: '100%', height: '200px' }}/>
          </Col>
          <Col xs={6} md={3} className="image-item" onClick={() => handleImageClick(img8)}>
            <img src={img8} alt="Image 8" className="img-fluid gallery-image" style={{ width: '100%', height: '200px' }}/>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          <img src={selectedImage} alt="Full Size" className="img-fluid" />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ImageGallery;
