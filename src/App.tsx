import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Heart, Github, Palette } from "lucide-react"
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            ShadCN UI Sample Project
          </h1>
          <p className="text-lg text-muted-foreground">
            A modern React + TypeScript application with ShadCN UI components and TweakCN theme support
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                <CardTitle>Beautiful Components</CardTitle>
              </div>
              <CardDescription>
                Built with Radix UI and Tailwind CSS
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                ShadCN UI provides beautifully designed, accessible components that you can copy and paste into your apps.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-blue-500" />
                <CardTitle>TweakCN Integration</CardTitle>
              </div>
              <CardDescription>
                Customizable theme system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Use TweakCN's theme editor to customize colors, radius, and more. Export and paste directly into your config.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                <CardTitle>Open Source</CardTitle>
              </div>
              <CardDescription>
                MIT Licensed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Free to use in your projects. Built with modern web technologies and best practices.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Demo Card */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Try It Out</CardTitle>
            <CardDescription>
              Interact with ShadCN UI components
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button>Default Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Submit</Button>
          </CardFooter>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground pt-8 border-t">
          <p>
            Built with React, TypeScript, Vite, Tailwind CSS, and ShadCN UI
          </p>
          <p className="mt-2">
            Visit{" "}
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              shadcn.com
            </a>
            {" "}and{" "}
            <a
              href="https://tweakcn.com/editor/theme"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              tweakcn.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App

