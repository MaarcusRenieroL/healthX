
const callouts = [
	{
		name: 'CROCIN Advance 650',
		description: '₹24.99',
		imageSrc: 'https://newassets.apollo247.com/pub/media/catalog/product/c/r/cro0023.jpg',
		href: '#',
	},
	{
		name: 'MOOV Pain Relief Spray 250ML',
		description: '₹247',
		imageSrc: 'https://static.oxinis.com/healthmug/image/product/140690-1-400.webp',
		href: '#',
	},
	{
		name: 'NIVEA Moisturising Cream 600ml',
		description: '₹312.50',
		imageSrc: ' https://m.media-amazon.com/images/I/61N6xGyHCML._SL1500_.jpg',
		href: '#',
	},
	{
		name: 'HIMALAYAS Neem & Turmeric Soap',
		description: '₹35.05',
		imageSrc: 'https://cdn.shopify.com/s/files/1/0272/4714/9155/products/neem-turmeric-soap-125g_1024x1024.jpg?v=1622100951',
		href: '#',
	},
	{
		name: 'MAMY POKO PANTS - Extra Absorb',
		description: '₹355',
		imageSrc: ' https://m.media-amazon.com/images/I/61QgKGPsJWL._SL1000_.jpg',
		href: '#',
	},
	{
		name: 'DABUR Chyawanprash 950G',
		description: '₹348',
		imageSrc: 'https://www.jiomart.com/images/product/600x600/490020520/dabur-chyawanprash-with-awaleha-950-g-product-images-o490020520-p490020520-0-202203152036.jpg',
		href: '#',
	},
	{
		name: 'DETTOL Antiseptic Liquid 1L',
		description: '₹301',
		imageSrc: 'https://www.jiomart.com/images/product/600x600/491502799/dettol-antiseptic-liquid-1-l-product-images-o491502799-p591042930-0-202203151354.jpg',
		href: '#',
	},
	{
		name: 'OPTIMUM Whey Protein 250G',
		description: '₹3236',
		imageSrc: 'https://www.jiomart.com/images/product/600x600/rvxfyj8ss2/optimum-nutrition-on-gold-standard-double-rich-chocolate-100-whey-protein-powder-2-lbs-907-g-product-images-orvxfyj8ss2-p590362417-0-202107211741.jpg',
		href: '#',
	},

	
]

export const ProductList = () => {
	return (
		<div>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-10">
					<h2 className="text-2xl lg:mb-12 font-bold text-gray-900">Popular Products</h2>

					<div className="mt- space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
						{callouts.map((callout) => (
							<div key={callout.name} className="group relative mb-10">
								<div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
									<img
										src={callout.imageSrc}
										alt={callout.imageAlt}
										className="h-full w-full object-cover object-center"
									/>
								</div>
								<h3 className="mt-6 text-sm text-gray-500">
									<a href={callout.href}>
										<span className="absolute inset-0" />
										{callout.name}
									</a>
								</h3>
								<p className="text-base font-semibold text-gray-900">{callout.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
