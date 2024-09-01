import { Categories } from '@/models/categories'
import React from 'react'
import { Separator } from '../ui/separator'

import './categories-bar.css'
interface CategoriesBarProps {
    categories: Categories[]
  }

export default function CategoriesBar({ categories }: CategoriesBarProps) {
  return (
        <div className="flex h-5 items-center space-x-4 text-sm">
            {categories.map((category, index) => (
                    <React.Fragment key={category.id}>
                    <div className='category'>{category.name}</div>
                    {index < categories.length - 1 && (
                        <Separator orientation="vertical" />
                    )}
                    </React.Fragment>
                ))}            
        </div>  )
}
