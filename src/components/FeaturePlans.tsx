'use client'
import React from 'react'
import gymData from "../data/gym_data.json"
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'
interface Plan {
  type: string,
  price: number,
  isfeatured: boolean,
  features: Array<string>,
}
function FeaturePlans() {
  const featuredPlans = gymData.gym.membership_plans.filter((membership_plans: Plan) => membership_plans.isfeatured)
  return (
    <div className='py-12 bg-gray-900'>
      <div>
        <div className='text-center'>
          <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>
            FEATURED PLANS
          </h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>
            Build Up with best trainers
          </p>
        </div>
      </div>
      <div className='mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-3 gap-8 justify-center'>
          {featuredPlans.map((membership_plans: Plan) => (
            <div key={membership_plans.type} className='flex justify-center text-white'>
              <BackgroundGradient
                className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{membership_plans.type}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{membership_plans.features}</p>
                  <Link href={`/courses/${membership_plans.type}`}>
                    Pay Now ₹ {membership_plans.price} only
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-20 text-center'>
        <Link href={"/plans"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white
        hover:bg-gray-100 transition-200"
        >
          View All Plans
        </Link>
      </div>
    </div>
  )
}

export default FeaturePlans
