'use client' // Marking the component for client-side rendering

import { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
// import { LineChart, BarChart } from '@/components/charts'

interface DashboardProps {
  data: {
    topCustomers: Array<{
      id: number
      dateJoined: string
      city: string
      totalSpending: number
    }>
  }
}

export function Dashboard({ data }: DashboardProps) {
  const [selectedCity, setSelectedCity] = useState<string | null>(null)

  const filteredCustomers = selectedCity
    ? data.topCustomers.filter(customer => customer.city === selectedCity)
    : data.topCustomers

  return (
    <div className="container mx-auto px-4 py-20 bg-white">
      <Card className="border border-[#EBEBEB] shadow-lg">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border border-[#EBEBEB]">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-[#2D2D2D]">Front-End Frameworks: Use modern JavaScript frameworks like React, Vue, or Angular to build dynamic and interactive user interfaces.
Back-End Technologies: If your website has complex functionality, use robust back-end frameworks like Node.js, Django, or Laravel.
Content Management Systems (CMS): For ease of content management, consider using a CMS like WordPress, Ghost, or headless CMS options like Strapi, which offers flexibility with the front-end.</CardTitle>
              </CardHeader>
              <CardContent>
                {/* <LineChart className="h-[200px]" /> */}
              </CardContent>
            </Card>
            <Card className="border border-[#EBEBEB]">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-[#2D2D2D]">Customer spending</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge className="bg-[#EBF5FF] text-[#2D2D2D]">Average</Badge>
                  <div className="text-4xl font-semibold text-[#2D2D2D]">
                    ${(data.topCustomers.reduce((sum, customer) => sum + customer.totalSpending, 0) / data.topCustomers.length).toFixed(2)}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <Card className="border border-[#EBEBEB]">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-[#2D2D2D]">Front-End Frameworks: Use modern JavaScript frameworks like React, Vue, or Angular to build dynamic and interactive user interfaces.
Back-End Technologies: If your website has complex functionality, use robust back-end frameworks like Node.js, Django, or Laravel.
Content Management Systems (CMS): For ease of content management, consider using a CMS like WordPress, Ghost, or headless CMS options like Strapi, which offers flexibility with the front-end.</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  {/* <label htmlFor="cityFilter" className="block text-sm font-medium text-[#2D2D2D] mb-1">
                    Filter by city:
                  </label> */}
                  <select
                    id="cityFilter"
                    value={selectedCity || ''}
                    onChange={(e) => setSelectedCity(e.target.value || null)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-[#2D2D2D] border-[#EBEBEB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5D5D] focus:border-[#FF5D5D]"
                  >
                    {/* <option value="">All cities</option>
                    {Array.from(new Set(data.topCustomers.map(customer => customer.city))).map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))} */}
                  </select>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-[#6E6E6E]">ID</TableHead>
                      <TableHead className="text-[#6E6E6E]">Date joined</TableHead>
                      <TableHead className="text-[#6E6E6E]">City</TableHead>
                      <TableHead className="text-[#6E6E6E]">Total spending</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCustomers.map((customer) => (
                      <TableRow key={customer.id}>
                        <TableCell className="text-[#2D2D2D]">{customer.id}</TableCell>
                        <TableCell className="text-[#2D2D2D]">{customer.dateJoined}</TableCell>
                        <TableCell className="text-[#2D2D2D]">{customer.city}</TableCell>
                        <TableCell className="text-[#2D2D2D]">${customer.totalSpending.toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card className="border border-[#EBEBEB]">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-[#2D2D2D]">Front-End Frameworks: Use modern JavaScript frameworks like React, Vue, or Angular to build dynamic and interactive user interfaces.
Back-End Technologies: If your website has complex functionality, use robust back-end frameworks like Node.js, Django, or Laravel.
Content Management Systems (CMS): For ease of content management, consider using a CMS like WordPress, Ghost, or headless CMS options like Strapi, which offers flexibility with the front-end.</CardTitle>
              </CardHeader>
              <CardContent>
                {/* <BarChart data={data.topCustomers} className="h-[200px]" /> */}
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
