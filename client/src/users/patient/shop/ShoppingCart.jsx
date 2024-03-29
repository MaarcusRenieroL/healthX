
import {StoreNavigation} from "./StoreNavigation"
import {Topbar} from "../../../components/Topbar";

export const ShoppingCart = () => {
    return (<>
            <StoreNavigation/>
            <div className="p-7">
                <Topbar title="Shopping Cart"/>
                <div className="">
                    
                    
                    <div className="shadow-lg rounded-lg">
                        <div className="laptop-screen:flex ">
                            <div className="w-full p-4 px-5 py-5">
                                
                                <div className="laptop-screen:grid laptop-screen:grid-cols-3 gap-2 ">
                                    
                                    <div className="col-span-2 p-5">
                                        
                                        <h1 className="text-xl font-medium ">Cart</h1>
                                        
                                        <div className="flex justify-between items-center mt-6 pt-6">
                                            <div className="flex  items-center">
                                                <img src="https://www.jiomart.com/images/product/600x600/491502799/dettol-antiseptic-liquid-1-l-product-images-o491502799-p591042930-0-202203151354.jpg" width="60"
                                                     className="rounded-full"/>
                                                
                                                <div className="flex flex-col ml-3">
                                                    <span className="laptop-screen:text-laptop-screen font-medium">DETTOL Antiseptic Liquid</span>
                                             
                                                </div>
                                            
                                            
                                            </div>
                                            
                                            <div className="flex justify-center items-center">
                                                
                                                <div className="pr-8 flex ">
                                                    <span className="font-semibold">-</span>
                                                    <input type="text"
                                                           className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                                                           value="1"/>
                                                    <span className="font-semibold">+</span>
                                                </div>
                                                
                                                <div className="pr-8 ">
                                                    
                                                    <span className="text-xs font-medium">₹301</span>
                                                </div>
                                                <div>
                                                    <i className="fa fa-close text-xs font-medium"></i>
                                                </div>
                                            
                                            </div>
                                        
                                        </div>
                                        
                                        
                                        <div className="flex justify-between items-center pt-6 mt-6 border-t">
                                            <div className="flex  items-center">
                                                <img src='https://newassets.apollo247.com/pub/media/catalog/product/c/r/cro0023.jpg' width="60"
                                                     className="rounded-full"/>
                                                
                                                <div className="flex flex-col ml-3 ">
                                                    <span
                                                        className="text-laptop-screen font-medium w-auto">CROCIN Advance 650</span>
                                                </div>
                                            </div>
                                            
                                            <div className="flex justify-center items-center">
                                                
                                                <div className="pr-8 flex">
                                                    <span className="font-semibold">-</span>
                                                    <input type="text"
                                                           className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                                                           value="1"/>
                                                    <span className="font-semibold">+</span>
                                                </div>
                                                
                                                <div className="pr-8">
                                                    
                                                    <span className="text-xs font-medium">₹24.99</span>
                                                </div>
                                                <div>
                                                    <i className="fa fa-close text-xs font-medium"></i>
                                                </div>
                                            
                                            </div>
                                        
                                        </div>
                                        
                                        
                                        <div className="flex justify-between items-center mt-6 pt-6 border-t">
                                            <div className="flex  items-center">
                                                <img src="https://m.media-amazon.com/images/I/61N6xGyHCML._SL1500_.jpg" width="60"
                                                     className="rounded-full"/>
                                                
                                                <div className="flex flex-col ml-3 ">
                                                <span className="text-laptop-screen font-medium">NIVEA Moisturising Cream 600ml</span>
                                                </div>
                                            
                                            </div>
                                            
                                            <div className="flex justify-center items-center">
                                                
                                                <div className="pr-8 flex">
                                                    <span className="font-semibold">-</span>
                                                    <input type="text"
                                                           className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                                                           value="1"/>
                                                    <span className="font-semibold">+</span>
                                                </div>
                                                
                                                <div className="pr-8">
                                                    
                                                    <span className="text-xs font-medium">₹312.50</span>
                                                </div>
                                                <div>
                                                    <i className="fa fa-close text-xs font-medium"></i>
                                                </div>
                                            
                                            </div>
                                        
                                        </div>
                                        
                                        
                                        <div className="flex justify-between items-center mt-6 pt-6 border-t">
                                            <div className="flex items-center">
                                                <i className="fa fa-arrow-left text-sm pr-2"></i>
                                                <span
                                                    className="text-laptop-screen  font-medium text-blue-500">Continue Shopping</span>
                                            </div>
                                            
                                            <div className="flex justify-center items-end">
                                                <span
                                                    className="text-sm font-medium text-gray-400 mr-1">Subtotal:</span>
                                                <span className="text-lg font-bold text-gray-800 "> ₹337.50</span>
                                            
                                            </div>
                                        
                                        </div>
                                    
                                    
                                    </div>
                                    <div className=" p-5 bg-gray-800 rounded overflow-visible">
                                        
                                        <span
                                            className="text-xl font-medium text-gray-100 block pb-3">Card Details</span>
                                        
                                        <span className="text-xs text-gray-400 ">Card Type</span>
                                        
                                        <div className="overflow-visible flex justify-between items-center mt-2">
                                            
                                            
                                            <div className="rounded w-52 h-28 bg-gray-500 py-2 px-4 relative right-10">
                                                
                                                <span
                                                    className="italic text-lg font-medium text-gray-200 underline">VISA</span>
                                                
                                                <div className="flex justify-between items-center pt-4 ">
                                                    
                                                    <span className="text-xs text-gray-200 font-medium">****</span>
                                                    <span className="text-xs text-gray-200 font-medium">****</span>
                                                    <span className="text-xs text-gray-200 font-medium">****</span>
                                                    <span className="text-xs text-gray-200 font-medium">****</span>
                                                
                                                </div>
                                                
                                                <div className="flex justify-between items-center mt-3">
                                                    
                                                    <span className="text-xs  text-gray-200">Giga Tamarashvili</span>
                                                    <span className="text-xs  text-gray-200">12/18</span>
                                                </div>
                                            
                                            
                                            </div>
                                            
                                            
                                            <div className="flex justify-center  items-center flex-col">
                                                
                                                <img src="https://img.icons8.com/color/96/000000/mastercard-logo.png"
                                                     width="40" className="relative right-5"/>
                                                <span
                                                    className="text-xs font-medium text-gray-200 bottom-2 relative right-5">mastercard.</span>
                                            
                                            </div>
                                        
                                        </div>
                                        
                                        
                                        <div className="flex justify-center flex-col pt-3">
                                            <label className="text-sm text-white ">Name on Card</label>
                                            <input type="text"
                                                   className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                                                   placeholder="Giga Tamarashvili"/>
                                        </div>
                                        
                                        
                                        <div className="flex justify-center flex-col pt-3">
                                            <label className="text-sm text-white">Card Number</label>
                                            <input type="text"
                                                   className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                                                   placeholder="****     ****      ****      ****"/>
                                        </div>
                                        
                                        
                                        <div className="grid grid-cols-3 gap-2 pt-2 mb-3">
                                            
                                            <div className="col-span-2 ">
                                                
                                                <label className="text-sm text-white">Expiration Date</label>
                                                <div className="grid grid-cols-2 gap-2">
                                                    
                                                    <input type="text"
                                                           className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                                                           placeholder="mm"/>
                                                    <input type="text"
                                                           className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                                                           placeholder="yyyy"/>
                                                
                                                </div>
                                            
                                            
                                            </div>
                                            
                                            <div className="">
                                                <label className="text-xs text-gray-400">CVV</label>
                                                <input type="text"
                                                       className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                                                       placeholder="XXX"/>
                                            
                                            </div>
                                        
                                        </div>
                                        
                                        
                                        <button
                                            className="h-12 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600">Check
                                            Out
                                        </button>
                                    
                                    </div>
                                
                                
                                </div>
                            
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}