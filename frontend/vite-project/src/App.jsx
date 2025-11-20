"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardBody, CardActions } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <div className="h-screen">

      {/* NAVBAR */}
      <div className="navbar bg-base-100 shadow">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">SmartRoutine</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>Community</a></li>
            <li><a>AI Maker</a></li>
            <li><a>Login</a></li>
          </ul>
        </div>
      </div>

      {/* MAIN CARD */}
      <Card className="m-4 h-[90%]">

        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>SmartRoutine Dashboard</CardTitle>
              <CardDescription>
                Explore & create routines with AI assistance
              </CardDescription>
            </div>

            <Button>Create Routine</Button>
          </div>
        </CardHeader>

        <Divider />

        <CardBody>

          {/* ROUTINE OPTION 1 */}
          <Card className="bg-base-200 shadow">
            <CardBody>
              <CardTitle>Skincare Routine</CardTitle>
              <p>Discover morning & night skincare routines.</p>
              <CardActions className="justify-end">
                <Button className="btn-outline btn-primary">View</Button>
              </CardActions>
            </CardBody>
          </Card>

          {/* ROUTINE OPTION 2 */}
          <Card className="bg-base-200 shadow">
            <CardBody>
              <CardTitle>Diet Routine</CardTitle>
              <p>Healthy meal patterns designed for your body.</p>
              <CardActions className="justify-end">
                <Button className="btn-outline btn-primary">View</Button>
              </CardActions>
            </CardBody>
          </Card>

          {/* ROUTINE OPTION 3 */}
          <Card className="bg-base-200 shadow">
            <CardBody>
              <CardTitle>Workout Routine</CardTitle>
              <p>Personalized fitness routines for all levels.</p>
              <CardActions className="justify-end">
                <Button className="btn-outline btn-primary">Explore</Button>
              </CardActions>
            </CardBody>
          </Card>

        </CardBody>

      </Card>
    </div>
  );
}
