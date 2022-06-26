import React, { useState } from 'react';
import DetailView from './DetailView';

export function ItemList2 () {        
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

        <div className="text-center lg:flex lg:text-left lg:items-baseline">
          <div className="max-w-sm mx-auto lg:mx-0">
            <h3 className="text-3xl font-bold text-gray-900">
              🦴 Natural History
            </h3>
          </div>

          <div className="max-w-sm mx-auto mt-6 lg:ml-24 lg:max-w-none lg:mx-0 lg:mt-0">
            <p className="text-base font-medium text-gray-500">
              Take a trip back in time to see how the Earth used to be – no time machine required!
            </p>
          </div>
        </div>

      <div className="grid grid-cols-1 gap-4 px-6 mt-12 sm:mt-16 sm:px-0 sm:gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <a href="#" className="relative overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 rounded-lg hover:shadow-lg hover:shadow-gray-300 group hover:-translate-y-1">
          <div className="overflow-hidden aspect-w-3 aspect-h-2">
            <img
              className="object-cover w-full h-full transition-all duration-300 origin-top transform group-hover:scale-105"
              src="https://assets0.fossilera.com/sp/475969/baltic-amber/order-diptera-flies-bryophyta-mosses.jpg" alt="" />
          </div>

          <div className="p-4">
            <span className="absolute top-2 right-2 px-2 py-1 rounded-full text-sm font-medium bg-gray-100 bg-opacity-75 backdrop-filter backdrop-blur text-gray-900" aria-hidden="true">~43 Million Years Old</span>

            <div className="">
              <p className="text-base font-bold text-gray-900">
                <a href="#" title="">
                  Baltic Amber with 5 Inclusions
                </a>
              </p>

              <div className="">
                <p className="text-sm font-medium text-gray-500">
                  Kaliningrad, Russia
                </p>
              </div>
            </div>
          </div>
        </a>

      </div>
    </div>
    <DetailView />
  </section>
  )
}