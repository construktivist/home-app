import React from 'react'
import handymanVid from '../../../../backgrounds/handyman.mp4'

const VideoBackground = React.createClass({

	render: function(){
		const backgroundStyle = {
			
			width: '100%',
			float: 'left',
			top: '0',
			padding: 'none',
			position: 'fixed',
			left: "0",
			zIndex: '-1'
		};
		return(

			<video id="background-video" style={backgroundStyle} loop autoPlay>
				<source src={handymanVid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
		)
	}

})

module.exports = VideoBackground
