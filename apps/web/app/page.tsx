import {Card } from "@repo/ui/card";

export default function Page(): JSX.Element {
  return (
    <>
      <main >
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-6">
            <h1 className="text-3xl font-bold"> Our Courses</h1>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
            <Card image="/omega.png" title="IIT JEE" details="Best coaching in North Bihar" href="#"/>
            <Card image="/omega.png" title="NEET" details="Best coaching in North Bihar" href="#"/>
            <Card image="/omega.png" title="FOUNDATION" details="Best coaching in North Bihar" href="#"/>
            <Card image="/omega.png" title="Class 6-10" details="Best coaching in North Bihar" href="#"/>
          </div>
        </div>
      </main>
    </>
  );
}
