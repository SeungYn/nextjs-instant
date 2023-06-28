import { ReactNode } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desk: {
    breakpoint: { max: 4000, min: 576 },
    items: 6,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 5,
  },
};



export default function ScrollableBar({children}:{children: ReactNode}) {
	return (
		<Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={this.props.deviceType !== 'mobile' ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition='all .5'
  transitionDuration={500}
  containerClass='carousel-container'
  removeArrowOnDeviceType={['tablet', 'mobile']}
  deviceType={this.props.deviceType}
  dotListClass='custom-dot-list-style'
  itemClass='carousel-item-padding-40-px'
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>;
	);
}

