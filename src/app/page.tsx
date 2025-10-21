// app/dashboard/page.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { OverviewChart } from "@/components/overview-chart";
import { AlertTriangle, X, ChevronRight } from "lucide-react";

/**
 * Dashboard page component
 * @returns JSX element
 */
export default function DashboardPage() {
  return (
      <div className="space-y-8">
      {/* Top Row: Welcome Card with Integrated Delivery Status */}
      <Card>
        <CardHeader className="relative">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-3xl font-bold text-gray-400 tracking-tight">Hey Sharon,</CardTitle>
              <CardDescription className="text-3xl font-semibold mt-2 text-gray-800">
               <span> You've made </span>
                <span className="inline-flex items-center gap-2 ml-2">
                  <span className="font-bold text-blue-600 text-3xl">$5,864</span>
                </span>
                <span> this week,</span>  
              </CardDescription>
              <p className="flex items-center gap-2 text-yellow-600 mt-2">
                <AlertTriangle className="h-4 w-4" />
                <span className="text-base font-semibold">1 thing needs</span>
                <span className="text-base text-gray-900">your attention.</span>
              </p>
            </div>
            
            {/* Delivery Status - Pill shaped in top right */}
            <div className="bg-yellow-100 px-4 py-2 rounded-full flex items-center gap-3">
              <div className="w-4 h-4 bg-gray-700 rounded-sm flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">Delivery is off</span>
              <Button variant="ghost" size="sm" className="text-gray-700 hover:bg-yellow-200 p-1 h-auto text-sm flex items-center gap-1">
                Turn on <ChevronRight className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

       {/* Download App Card */}
       <Card className="relative bg-blue-600 text-white">
         <Button variant="ghost" size="icon" className="absolute top-2 right-2 hover:bg-blue-700 hover:text-white">
           <X className="h-4 w-4" />
         </Button>
         <CardHeader>
           <CardTitle className="text-white">Run your restaurant anywhere.</CardTitle>
           <CardDescription className="text-blue-100">
             Download the Owner app.
           </CardDescription>
         </CardHeader>
         <CardContent className="space-y-3">
           <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 w-full">Download app</Button>
           <p className="text-xs text-blue-200 text-center">Available for iOS and Android</p>
         </CardContent>
       </Card>

      {/* Second Row: Setup Cards */}
      <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
        <Card className="lg:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Menu</CardTitle>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Import your menu.</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-muted-foreground">6 mins</span>
              <Button variant="link" className="p-0 h-auto flex items-center gap-1">Set up <ChevronRight className="h-3 w-3" /></Button>
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">POS</CardTitle>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Sync your Owner menu with your POS.</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-muted-foreground">3 mins</span>
              <Button variant="link" className="p-0 h-auto flex items-center gap-1">Set up <ChevronRight className="h-3 w-3" /></Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Third Row: Overview Section */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Overview</h2>
          <Tabs defaultValue="last30">
            <TabsList>
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="yesterday">Yesterday</TabsTrigger>
              <TabsTrigger value="last7">Last 7 days</TabsTrigger>
              <TabsTrigger value="last30">Last 30 days</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <Tabs defaultValue="last30">
          <TabsContent value="last30">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div>
                    <CardTitle className="text-xl font-bold">Net sales</CardTitle>
                    <CardDescription className="text-3xl font-bold text-blue-600 mt-2">$29,917.90</CardDescription>
                  </div>
                  <Button variant="link" className="p-0 h-auto">View report {'>'}</Button>
                </CardHeader>
                <CardContent className="pl-2">
                  <OverviewChart />
                </CardContent>
              </Card>
              
              <div className="lg:col-span-3 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold">By platform</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                          <span className="text-sm">App</span>
                        </div>
                        <span className="font-medium">$10,837.18</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                          <span className="text-sm">Website</span>
                        </div>
                        <span className="font-medium">$19,080.72</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold">By source</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                          <span className="text-sm">Campaigns (Email, SMS & More)</span>
                        </div>
                        <span className="font-medium">$1,871.17</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                          <span className="text-sm">Google SEO</span>
                        </div>
                        <span className="font-medium">$13,084.26</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-blue-700 rounded-sm"></div>
                          <span className="text-sm">Direct Traffic</span>
                        </div>
                        <span className="font-medium">$14,962.47</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      </div>
  );
}