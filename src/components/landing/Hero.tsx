import { Button } from "../ui/button";
import { CalendarIcon, MicIcon } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden py-12">
      {/* GRID BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      </div>

      {/* GRADIENT ORBS */}
      <div className="absolute top-10 left-1/4 w-64 h-64 md:w-72 md:h-72 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-r from-primary/15 to-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center flex-col-reverse lg:flex-row">

            {/* Left Content */}
            <div className="space-y-8 lg:space-y-10 xl:mt-28 lg:mt-8 text-center lg:text-left ">
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-primary">
                    AI-Powered Assistant
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                  <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    Your dental
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    questions
                  </span>
                  <br />
                  <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    answered instantly
                  </span>
                </h1>

                {/* Sub Title */}
                <p className="text-base sm:text-md text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                  Chat with our AI dental assistant for instant advice, book smart appointments, and
                  get personalized care recommendations. Available 24/7.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col xl:-mt-8 sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg">
                  <MicIcon className="mr-2 size-5" />
                  Try voice Agent
                </Button>
                <Button size="lg" variant="ghost">
                  <CalendarIcon className="mr-2 size-5" />
                  Book Appointment
                </Button>
              </div>
            </div>

            {/* Right Content*/}
            <div className="relative hidden lg:block ">
              {/* Gradient Orbs near image */}
              <div className="absolute -top-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl rotate-45 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-28 sm:w-36 sm:h-32 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-2xl"></div>

              <div className="mx-auto lg:mt-48 max-w-sm sm:max-w-md lg:max-w-none">
                <Image
                  src="/hero.png"
                  alt="Dentosi AI"
                  width={450}
                  height={450}
                  className="w-full drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;