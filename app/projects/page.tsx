'use client'
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="w-full py-10 md:py- lg:px-32">
        <div className="container space-y-10 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Latest Work</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Explore a selection of our most recent and innovative projects.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card>
              <img
                src="/tech1.jpg"
                width={500}
                height={300}
                alt="Project 1"
                className="rounded-t-lg object-fill"
                style={{ aspectRatio: "500/300", objectFit: "fill" }}
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Project 1</h3>
                <p className="text-muted-foreground">A modern and responsive website for a leading tech company.</p>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/fitness.jpg"
                width={500}
                height={300}
                alt="Project 2"
                className="rounded-t-lg object-fill"
                style={{ aspectRatio: "500/300", objectFit: "fill" }}
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Project 2</h3>
                <p className="text-muted-foreground">A sleek and intuitive mobile app for a fitness brand.</p>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/fashion.jpg"
                width={500}
                height={300}
                alt="Project 3"
                className="rounded-t-lg object-fill"
                style={{ aspectRatio: "500/300", objectFit: "fill" }}
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Project 3</h3>
                <p className="text-muted-foreground">A custom e-commerce platform for a luxury fashion label.</p>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/noprofit.jpg"
                width={500}
                height={300}
                alt="Project 4"
                className="rounded-t-lg object-fill"
                style={{ aspectRatio: "500/300", objectFit: "fill" }}
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Project 4</h3>
                <p className="text-muted-foreground">A dynamic and engaging website for a leading nonprofit.</p>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/fintech.jpg"
                width={500}
                height={300}
                alt="Project 5"
                className="rounded-t-lg object-fill"
                style={{ aspectRatio: "500/300", objectFit: "fill" }}
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Project 5</h3>
                <p className="text-muted-foreground">A custom web application for a cutting-edge fintech startup.</p>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/education.jpg"
                width={500}
                height={300}
                alt="Project 6"
                className="rounded-t-lg object-fill"
                style={{ aspectRatio: "500/300", objectFit: "fill" }}
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Project 6</h3>
                <p className="text-muted-foreground">
                  A responsive and accessible website for a leading educational institution.
                </p>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/healtcare2.jpg"
                width={500}
                height={300}
                alt="Project 7"
                className="rounded-t-lg object-fill"
                style={{ aspectRatio: "500/300", objectFit: "fill" }}
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Project 7</h3>
                <p className="text-muted-foreground">A custom web application for a leading healthcare provider.</p>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/1.jpg"
                width={500}
                height={300}
                alt="Project 8"
                className="rounded-t-lg object-fill"
                style={{ aspectRatio: "500/300", objectFit: "fill" }}
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Project 8</h3>
                <p className="text-muted-foreground">
                  A modern and engaging website for a leading sustainability organization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}