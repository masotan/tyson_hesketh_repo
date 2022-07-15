import Carousel from 'react-bootstrap/Carousel';
import './CarouselFade.css'

function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fyto1-1.fna.fbcdn.net/v/t1.6435-9/41524116_341982809879999_2142867335545880576_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=VNi-E0wixN4AX9Fo5Oi&_nc_ht=scontent.fyto1-1.fna&oh=00_AT8NwYDrSa64rnvRWtp4SvtZU75eRI0cq_jUjz4IM4fWUg&oe=62F6B86F"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.wixstatic.com/media/6e4cd0_ce2a7c4ab0624da293eb4da0f325265d~mv2.jpg/v1/fill/w_1364,h_768,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/crowd-at-concert-2.jpg"
          alt="Second slide"
        />


          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fyto1-2.fna.fbcdn.net/v/t1.6435-9/41668518_341975679880712_2952019924068859904_n.jpg?stp=dst-jpg_p640x640&_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=zeyp0jBU3I8AX9IHjI-&_nc_ht=scontent.fyto1-2.fna&oh=00_AT8cxOk8xtmBaUIYT-1gE0vEz7DPD7Z3ZBMFwJ6PepHHbw&oe=62F9291F"
          alt="Third slide"
        />

          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;