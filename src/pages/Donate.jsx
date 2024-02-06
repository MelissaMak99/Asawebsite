import React from 'react'
import { Button } from 'react-scroll'
import {Link} from 'react-router-dom'
import Logo from '../images/Asali-1 (2).jpg';


function Donate() {
  return (
    <div>
    <div className='bg-white flex text-black justify-between items-center h-24  max-w-[1240px] mx-auto px-4'>
        <Button><Link to={"/"} spy={true} smooth={true} offset={50} duration={500}><img className='w-[100px] md:w-[150px]' src={Logo} alt='Not found'/></Link></Button>
    </div>
      <div className='m-4 sm:m-40 border-2 border-yellow-500'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='items-center text-2xl sm:text-4xl text-center max-w-[800px] font-bold text-yellow-600 py-6'>Thank you for supporting our mission and helping to make a positive impact in our community.</h1>
          <div className="flex-grow border-t border-gray-400 py-6"></div>
        </div>
        <div className='flex w-full px-8'>
        <Button className='w-1/2 border-2 text-sm sm:text-lg font-medium text-yellow-500 border-yellow-500 p-3 hover:bg-yellow-500 hover:text-white'>ONE TIME</Button>
        <Button className='w-1/2 border-2 text-sm sm:text-lg font-medium text-yellow-500 border-yellow-500 p-3 hover:bg-yellow-500 hover:text-white'>MONTHLY</Button>
        </div>
        <div className='w-full px-8'>
          <div className='py-4'>
            <p>Choose amout</p>
          </div>
          <div className='grid grid-rows-2 sm:flex  items-center justify-center'>
            <div className='grid grid-cols-2 grid-row-2 sm:grid-cols-4 gap-4 w-full sm:w-1/2 px-2'>
              <Button className="bg-yellow-200 rounded-lg hover:bg-yellow-500 hover:text-white font-medium p-4">$25</Button>
              <Button className="bg-yellow-200 rounded-lg hover:bg-yellow-500 hover:text-white font-medium p-4">$50</Button>
              <Button className="bg-yellow-200 rounded-lg hover:bg-yellow-500 hover:text-white font-medium p-4">$100</Button>
              <Button className="bg-yellow-200 rounded-lg hover:bg-yellow-500 hover:text-white font-medium p-4">$500</Button>
            </div>
            <div className='flex border-2 w:full sm:w-1/2 rounded-lg border-yellow-500'>
              <div className='w-[20%]'>
                <Button className='bg-yellow-500 text-white sm:px-6 sm:py-4 h-full px-1 py-2'>USD</Button>
              </div>
              
              <div className='w-[80%] inline-flex'>
              <label className="text-gray-700 font font-medium text-xl  p-2 sm:p-4">$</label>
              <input
                          
                          className='py-4 w-full'
                          placeholder="other amount"
                          required
                      />
              </div>
              
            </div>
          </div>
          <div className="flex-grow border-t border-gray-400 mt-12"></div>

        </div>

        <div className='px-8'>
        <h1 className="text-2xl font-bold text-grey-600 py-6">Your information</h1>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">First Name</label>
            <input
                      
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder=""
                required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Last Name</label>
            <input
                      
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder=""
                required
            />
          </div>
        </div>
        <div className='mb-6'>
          <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Make this donation anonymous</label>
        </div>
      <div class="w-full">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Email
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder=""/>
        </div>
      <div className='w-1/2'>
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Phone number
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder=""/>
      </div>

        <div className="flex-grow border-t border-gray-400 mt-12"></div>
        </div>

        <div className='flex flex-col justify-center items-center py-6 w-full border-2'>
          <p className='text-xs p-2'>By clicking the donate button, I agree to the Terms of Service and Privacy Policy</p>
          <div>
          <button type="button" class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
            <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg>
            Pay with PayPal
          </button>
          </div>
        <div>
        <form class="max-w-sm mx-auto items-center">
            <label for="card-number-input" class="sr-only">Card number:</label>
            <div class="relative">
                <input type="text" id="card-number-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pe-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="4242 4242 4242 4242" pattern="^4[0-9]{12}(?:[0-9]{3})?$" required/>
                <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                    <svg fill="none" class="h-6 text-[#1434CB] dark:text-white" viewBox="0 0 36 21"><path fill="currentColor" d="M23.315 4.773c-2.542 0-4.813 1.3-4.813 3.705 0 2.756 4.028 2.947 4.028 4.332 0 .583-.676 1.105-1.832 1.105-1.64 0-2.866-.73-2.866-.73l-.524 2.426s1.412.616 3.286.616c2.78 0 4.966-1.365 4.966-3.81 0-2.913-4.045-3.097-4.045-4.383 0-.457.555-.957 1.708-.957 1.3 0 2.36.53 2.36.53l.514-2.343s-1.154-.491-2.782-.491zM.062 4.95L0 5.303s1.07.193 2.032.579c1.24.442 1.329.7 1.537 1.499l2.276 8.664h3.05l4.7-11.095h-3.043l-3.02 7.543L6.3 6.1c-.113-.732-.686-1.15-1.386-1.15H.062zm14.757 0l-2.387 11.095h2.902l2.38-11.096h-2.895zm16.187 0c-.7 0-1.07.37-1.342 1.016L25.41 16.045h3.044l.589-1.68h3.708l.358 1.68h2.685L33.453 4.95h-2.447zm.396 2.997l.902 4.164h-2.417l1.515-4.164z"/></svg>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-4 my-4">
                <div class="relative max-w-sm col-label-2">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </div>
                    <label for="card-expiration-input" class="sr-only">Card expiration date:</label>
                    <input datepicker datepicker-format="mm/yy" id="card-expiration-input" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="12/23" required/>
                </div>
                <div class="col-label-1">
                    <label for="cvv-input" class="sr-only">Card CVV code:</label>
                    <input type="number" id="cvv-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="CVV" required/>
                </div>
            </div>
            <button type="submit" class="text-white bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Pay now</button>
        </form>
        </div>

        </div>

      </div>
      </div>
  )
}

export default Donate