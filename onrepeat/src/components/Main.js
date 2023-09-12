import React from 'react'
const rect = [1,2,3,4]
export default function Main() {
    return (
        <main class="col-span-5 row-span-3 overflow-auto">
            <header
                class="px-6 py-4 mb-6 bg-gray-600 flex items-center justify-between sticky top-0 z-10"
            >
                <div class="flex items-center">
                    <button
                        class="h-8 w-8 bg-gray-500 rounded-full text-white flex mr-4 opacity-50 cursor-not-allowed"
                    >
                        <svg class="h-5 w-5 m-auto" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"
                            ></path>
                        </svg>
                    </button>
                    <button class="h-8 w-8 bg-gray-500 rounded-full text-white flex">
                        <svg class="h-5 w-5 m-auto" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M7.96 21.15l-.65-.76 9.555-8.16L7.31 4.07l.65-.76 10.445 8.92"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div>
                    <button
                        class="text-xs text-white bg-gray-500 rounded-full p-px pr-3"
                    >
                        <img
                            src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.0-1/p320x320/65515608_2532995250044876_5026016977987043328_n.jpg?_nc_cat=107&_nc_sid=0c64ff&_nc_ohc=o9OLXY2wcysAX9HP-OL&_nc_ht=scontent-hkg4-1.xx&_nc_tp=6&oh=3692e7babdda377f38099d7603d11f92&oe=5EAD96FA"
                            class="w-7 h-7 inline-block rounded-full mr-2"
                        />
                        Jedidiah Avelino
                    </button>
                </div>
            </header>
            <section class="px-6 grid gap-6 mb-8">
                <div class="flex items-center">
                    <div class="flex-1">
                        <h3 class="text-2xl text-white">
                            <a
                                class="border-b border-transparent hover:border-white"
                                href=""
                            >Recently played</a
                            >
                        </h3>
                    </div>
                    <div>
                        <a
                            class="text-xs text-gray-100 tracking-widest uppercase hover:underline"
                            href=""
                        >See all</a
                        >
                    </div>
                </div>
                <div class="grid grid-cols-6 gap-4">
                    {rect.map((no) =>
                    <div class="bg-gray-200 rounded-lg p-5">
                    <div class="relative pt-full mb-4">
                        <img
                            class="block w-full absolute inset-0"
                            src="https://picsum.photos/129.webp?random=1"
                            alt=""
                        />
                    </div>
                    <div class="text-sm text-white text-line-clamp-1 mb-1 block">
                        Chinese Lo-FI
                    </div>
                    <div class="relative pb-5">
                        <span class="text-xs text-gray-100 text-line-clamp-1"
                        >By @Nike1nike</span
                        >
                        <button
                            class="absolute right-0 top-0 w-10 h-10 bg-green-200 rounded-full flex text-white"
                        >
                            <svg
                                class="fill-current h-5 w-5 m-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
                            </svg>
                        </button>
                    </div>
                </div>
                    )}
                    
                    
                </div>
            </section>
            <section class="px-6 grid gap-6 mb-8">
                <div class="flex items-center">
                    <div class="flex-1">
                        <h3 class="text-2xl text-white">
                            <a
                                class="border-b border-transparent hover:border-white"
                                href=""
                            >Made for </a
                            >
                        </h3>
                    </div>
                    <div>
                        <a
                            class="text-xs text-gray-100 tracking-widest uppercase hover:underline"
                            href=""
                        >See all</a
                        >
                    </div>
                </div>
                <div class="grid grid-cols-6 gap-4">
                    {rect.map((no) =>
                    <div class="bg-gray-200 rounded-lg p-5">
                    <div class="relative pt-full mb-4">
                        <img
                            class="block w-full absolute inset-0"
                            src="https://picsum.photos/129.webp?random=1"
                            alt=""
                        />
                    </div>
                    <div class="text-sm text-white text-line-clamp-1 mb-1 block">
                        Chinese Lo-FI
                    </div>
                    <div class="relative pb-5">
                        <span class="text-xs text-gray-100 text-line-clamp-1"
                        >By @Nike1nike</span
                        >
                        <button
                            class="absolute right-0 top-0 w-10 h-10 bg-green-200 rounded-full flex text-white"
                        >
                            <svg
                                class="fill-current h-5 w-5 m-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
                            </svg>
                        </button>
                    </div>
                </div>
                    )}
                    
                    
                </div>
            </section>
        </main>
    )
}
