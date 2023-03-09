/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const callouts = [
    {
      imageSrc: 'https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-2.640dcfd5.png',
    },
    {
      imageSrc: 'https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-7.476668e1.png',
    },
    {
      imageSrc: 'https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-5.a8ae14dd.png',
    },
  ]
  
  export const ProductCategory = () => {
    return (
      <div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:py-24 lg:max-w-none lg:py-10">
            <h2 className="text-2xl font-bold text-gray-900">Browse by Categories</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 ">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  