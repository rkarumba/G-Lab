import React from 'react';
import Product from './Product';

function Iphone11ProMax() {
	return (
		<div>
			<Product
				ProductImage="apple-iphone-12-pro-max-1.png"
				ProductName="Iphone 12 Pro Max"
				ProductPrice="$1100"
				ProductOldPrice="$1500"
				ProductDescription="Apple's best ever made Iphone Apple's best ever made Iphone Apple's" //Should be at-least 12words to maintain design
				ProductStorageNumber="500"
				ProductMemoryNumber="4"
				ProductMainCameraSpecs="50"
				ProductFrontCameraSpecs="20"
			/>
		</div>
	);
}

export default Iphone11ProMax;
