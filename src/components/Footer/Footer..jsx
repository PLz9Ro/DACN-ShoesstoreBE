import { Button, Grid, Link, Typography } from '@mui/material'
import React from 'react'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />


const Footer = ({data}) => {
    return (
        // <div>
        //     <Grid className='bg-white text-white text-center mt-10' container sx={{ bgcolor: "black", color: "white", py: 3 }}>
        //         {/* <Grid item xs={12} sm={6} md={4}>
        //         <div>
        //             <div className='w-[30rem] h-[30rem]'>
        //                 <img  alt="" />
        //             </div>
        //         </div>
        //         </Grid> */}
        //         <Grid item xs={12} sm={6} md={3}>
        //             <Typography className='pb-5 text-sm ' variant='h6' gutterBottom >Solutions</Typography>
        //             <div>
        //                 <Button className='pb-5 text-sm ' variant='h6' gutterBottom >Marketing</Button>
        //             </div>
        //             <div>
        //                 <Button className='pb-5 text-sm ' variant='h6' gutterBottom >Analytics</Button>
        //             </div>
        //             <div>
        //                 <Button className='pb-5 text-sm ' variant='h6' gutterBottom >Commerce</Button>
        //             </div>
        //             <div>
        //                 <Button className='pb-5 text-sm ' variant='h6' gutterBottom >Insights</Button>
        //             </div>
        //         </Grid>

        //         <Grid item xs={12} sm={6} md={3}>
        //             <Typography className='pb-5 text-sm ' variant='h6' gutterBottom >Support</Typography>
        //             <div>
        //                 <Button className='pb-5 text-sm ' variant='h6' gutterBottom >Pricing</Button>
        //             </div>
        //             <div>
        //                 <Button className='pb-5 text-sm ' variant='h6' gutterBottom >Documentation</Button>
        //             </div>
        //             <div>
        //                 <Button className='pb-5 text-sm ' variant='h6' gutterBottom >Guides</Button>
        //             </div>
        //             <div>
        //                 <Button className='pb-5 text-sm ' variant='h6' gutterBottom >API Status</Button>
        //             </div>
        //         </Grid>

        //         <Grid item xs={12} sm={6} md={3}>
        //         <Typography className='pb-5 text-sm ' variant='h6' gutterBottom >Company</Typography>
        //             <div>
        //                 <Button className='pb-5 text-sm ' variant='h6' gutterBottom >About</Button>
        //             </div>
        //             <div>
        //                 <Button className='pb-5 text-sm ' variant='h6' gutterBottom >Blog</Button>
        //             </div>
        //             <div>
        //                 <Button className='pb-5 text-sm ' variant='h6' gutterBottom >Press</Button>
        //             </div>
        //             <div>
        //                 <Button className='pb-5 text-sm ' variant='h6' gutterBottom >Jobs</Button>
        //             </div>
        //         </Grid>
        //         <Grid item xs={12} sm={6} md={3}>
        //         <Typography className='pb-5 text-sm ' variant='h6' gutterBottom >Company</Typography>
        //             <div>
        //                 <Button className='pb-5 text-sm ' variant='h6' gutterBottom >About</Button>
        //             </div>
        //             <div>
        //                 <Button className='pb-5 text-sm ' variant='h6' gutterBottom >Blog</Button>
        //             </div>
        //             <div>
        //                 <Button className='pb-5 text-sm ' variant='h6' gutterBottom >Press</Button>
        //             </div>
        //             <div>
        //                 <Button className='pb-5 text-sm ' variant='h6' gutterBottom >Jobs</Button>
        //             </div>
        //         </Grid>

        //         <Grid className='mt-50' sm={12}>
        //             <Typography variant='body2' component="p" align='center'>
        //                 &copy; 2023 My Company
        //             </Typography>
        //             <Typography variant='body2' component="p" align='center'>
        //                 &copy; Make With Love By Me 
        //             </Typography>
        //             <Link href="" color="inherit" underline='alway'>
        //             </Link>
        //         </Grid>
        //     </Grid>
            
        // </div>
//         <footer class="p-4 bg-white sm:p-6 dark:bg-gray-800">
//         <div class="mx-auto max-w-screen-xl">
//         <div class="md:flex md:justify-between">
//             <div class="mb-6 md:mb-0">
//                 <a href="https://flowbite.com" class="flex items-center">
//                     <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-8" alt="FlowBite Logo" />
//                     <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//                 </a>
//             </div>
//             <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
//                 <div>
//                     <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
//                     <ul class="text-gray-600 dark:text-gray-400">
//                         <li class="mb-4">
//                             <a href="https://flowbite.com" class="hover:underline">Flowbite</a>
//                         </li>
//                         <li>
//                             <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
//                         </li>
//                     </ul>
//                 </div>
//                 <div>
//                     <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
//                     <ul class="text-gray-600 dark:text-gray-400">
//                         <li class="mb-4">
//                             <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
//                         </li>
//                         <li>
//                             <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
//                         </li>
//                     </ul>
//                 </div>
//                 <div>
//                     <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
//                     <ul class="text-gray-600 dark:text-gray-400">
//                         <li class="mb-4">
//                             <a href="#" class="hover:underline">Privacy Policy</a>
//                         </li>
//                         <li>
//                             <a href="#" class="hover:underline">Terms &amp; Conditions</a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//         <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
//         <div class="sm:flex sm:items-center sm:justify-between">
//             <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" class="hover:underline">Flowbite™</a>. All Rights Reserved.
//             </span>
//             <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
//                 <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
//                     <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
//                 </a>
//                 <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
//                     <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
//                 </a>
//                 <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
//                     <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
//                 </a>
//                 <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
//                     <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
//                 </a>
//                 <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
//                     <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
//                 </a>
//             </div>
//         </div>
//     </div>
// </footer>

<div className="flex items-end w-full min-h-screen bg-white">
  <footer className="w-full text-gray-700 bg-gray-100 body-font">
    <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
      <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
        <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
          <svg className="w-auto h-5 text-gray-900 fill-current" viewBox="0 0 202 69" xmlns="http://www.w3.org/2000/svg">
            <path d="M57.44.672s6.656 1.872 6.656 5.72c0 0-1.56 2.6-3.744 6.552 8.424 1.248 16.744 1.248 23.816-1.976-1.352 7.904-12.688 8.008-26.208 6.136-7.696 13.624-19.656 36.192-19.656 42.848 0 .416.208.624.52.624 4.576 0 17.888-14.352 21.112-18.824 1.144-1.456 4.264.728 3.12 2.392C56.608 53.088 42.152 69 36.432 69c-4.472 0-8.216-5.928-8.216-10.4 0-6.552 11.752-28.08 20.28-42.952-9.984-1.664-20.176-3.64-27.976-3.848-13.936 0-16.64 3.536-17.576 6.032-.104.312-.52.52-.832.312-3.744-7.072-1.456-14.56 14.144-14.56 9.36 0 22.048 4.576 34.944 7.592C54.736 5.04 57.44.672 57.44.672zm46.124 41.08c1.144-1.456 4.264.728 3.016 2.392C100.236 53.088 85.78 69 80.06 69c-4.576 0-8.32-5.928-8.32-10.4v-.208C67.58 64.32 63.524 69 61.34 69c-4.472 0-8.944-4.992-8.944-11.856 0-10.608 15.704-33.072 24.96-33.072 4.992 0 7.384 2.392 8.528 4.576l2.6-4.576s6.656 1.976 6.656 5.824c0 0-13.312 24.336-13.312 30.056 0 .208 0 .624.52.624 4.472 0 17.888-14.352 21.216-18.824zm-40.56 18.72c2.184 0 11.752-13.312 17.368-22.048l4.16-7.488c-8.008-7.904-27.248 29.536-21.528 29.536zm57.564-38.168c-2.184 0-4.992-2.808-4.992-4.784 0-2.912 5.824-14.872 7.28-14.872 2.6 0 6.136 2.808 6.136 6.344 0 2.08-7.176 12.064-8.424 13.312zm-17.68 46.592c-4.472 0-8.216-5.928-8.216-10.4 0-6.656 16.744-34.528 16.744-34.528s6.552 1.976 6.552 5.824c0 0-13.312 24.336-13.312 30.056 0 .208.104.624.624.624 4.472 0 17.888-14.352 21.112-18.824 1.144-1.456 4.264.728 3.12 2.392-6.448 8.944-20.904 24.856-26.624 24.856zM147.244.672s6.656 1.872 6.656 5.72c0 0-25.792 43.784-25.792 53.56 0 .416.208.624.52.624 4.576 0 17.888-14.352 21.112-18.824 1.144-1.456 4.264.728 3.12 2.392C146.412 53.088 131.956 69 126.236 69c-4.472 0-8.216-5.928-8.216-10.4 0-10.4 29.224-57.928 29.224-57.928zM169.7 60.16c3.848-2.392 7.904-6.864 10.816-10.92 6.656-9.464 11.544-20.696 10.504-27.352-.312-3.432-.104-4.056 3.12-2.704 5.2 2.392 11.336 8.632 2.184 22.88-5.2 8.008-12.48 15.288-19.344 19.76-2.704 1.768-6.344 3.328-9.984 4.16-.52.416-1.04.728-1.456.936-1.872 1.352-4.264 2.08-7.592 2.08-14.664 0-16.848-12.272-16.848-16.016 0-2.392 3.224-4.68 4.784-3.744.208.104.312.416.312.624 0 2.808 1.872 13.104 9.984 13.104 7.904 0 3.432-18.304 2.288-27.144-1.456 2.288-3.432 4.992-5.616 8.32-2.6 3.744-5.72 1.456-4.784 0 5.824-8.424 9.152-13.832 11.856-18.616 1.248-2.08 3.328-3.328 6.448-3.328 2.704 0 5.824 3.016 6.864 4.784.312.52 0 1.04-.52 1.144a5.44 5.44 0 00-4.368 5.408c0 6.968 2.6 17.16 1.664 24.856l-.312 1.768z" fillRule="nonzero" /></svg>
        </a>
        <p className="mt-2 text-sm text-gray-500">Design, Code and Ship!</p>
        <div className="mt-4">
          <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
            <a className="text-gray-500 cursor-pointer hover:text-gray-700">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                </path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                </path>
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
          <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">About</h2>
          <nav className="mb-10 list-none">
            <li className="mt-3">
              <a className="text-gray-500 cursor-pointer hover:text-gray-900">Company</a>
            </li>
            <li className="mt-3">
              <a className="text-gray-500 cursor-pointer hover:text-gray-900">Careers</a>
            </li>
            <li className="mt-3">
              <a className="text-gray-500 cursor-pointer hover:text-gray-900">Blog</a>
            </li>
          </nav>
        </div>
        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
          <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Support</h2>
          <nav className="mb-10 list-none">
            <li className="mt-3">
              <a className="text-gray-500 cursor-pointer hover:text-gray-900">Contact Support</a>
            </li>
            <li className="mt-3">
              <a className="text-gray-500 cursor-pointer hover:text-gray-900">Help Resources</a>
            </li>
            <li className="mt-3">
              <a className="text-gray-500 cursor-pointer hover:text-gray-900">Release Updates</a>
            </li>
          </nav>
        </div>
        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
          <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Platform
          </h2>
          <nav className="mb-10 list-none">
            <li className="mt-3">
              <a className="text-gray-500 cursor-pointer hover:text-gray-900">Terms &amp; Privacy</a>
            </li>
            <li className="mt-3">
              <a className="text-gray-500 cursor-pointer hover:text-gray-900">Pricing</a>
            </li>
            <li className="mt-3">
              <a className="text-gray-500 cursor-pointer hover:text-gray-900">FAQ</a>
            </li>
          </nav>
        </div>
        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
          <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Contact</h2>
          <nav className="mb-10 list-none">
            <li className="mt-3">
              <a className="text-gray-500 cursor-pointer hover:text-gray-900">Send a Message</a>
            </li>
            <li className="mt-3">
              <a className="text-gray-500 cursor-pointer hover:text-gray-900">Request a Quote</a>
            </li>
            <li className="mt-3">
              <a className="text-gray-500 cursor-pointer hover:text-gray-900">+123-456-7890</a>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div className="bg-purple-500" id='bg-footer-coppy'>
      <div className="container px-5 py-4 mx-auto">
        <p className="text-sm text-gray-700 capitalize xl:text-center">© 2020 All rights reserved </p>
      </div>
    </div>
  </footer>
</div>


    )
}

export default Footer