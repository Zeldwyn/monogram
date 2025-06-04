import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FooterComponent() {
  const footerColClass = "text-lpeach font-light text-[13.5px] space-y-1 tracking-[1px]";
  const footerHeader = "font-semibold text-lpeach text-[10.8px] mb-3 tracking-[1px]";

  return (
    <footer className="w-full bg-navy p-8 md:p-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20 justify-between">
        {/* Footer Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8 md:w-[60%] w-full">
          <div className={footerColClass}>
            <p className={footerHeader}>MONOGRAM</p>
            <p>305 King St. W. Suite 502</p>
            <p>Kitchener, ON Canada</p>
          </div>
          <div className={footerColClass}>
            <p className={footerHeader}>QUICK LINKS</p>
            <p>Home</p>
            <p>How it Works</p>
            <p>Shop</p>
            <p>Download</p>
          </div>
          <div className={footerColClass}>
            <p className={footerHeader}>HELP</p>
            <p>FAQs</p>
            <p>Support Center</p>
            <p>Shipping and Sales</p>
          </div>
          <div className={footerColClass}>
            <p className={footerHeader}>INFORMATION</p>
            <p>About Us</p>
            <p>Work with us</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Terms of Sale</p>
            <p>Press Kit</p>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="w-full md:w-[35%] space-y-4">
          <p className={footerHeader}>SUBSCRIBE TO MONOGRAM</p>
          <p className="text-lpeach text-sm font-light">
            Master productivity with Creative Console and get all the latest Monogram news.
          </p>

          <div className="flex flex-row items-start gap-2">
            <Input
              type="email"
              placeholder="Email Address"
              className="rounded-none border-lpeach md:w-[180px] w-[60%] h-[30px]"
            />
            <Button
              type="submit"
              className="bg-lpeach hover:bg-peach text-navy text-xs font-semibold rounded-3xl h-[30px] px-4"
            >
              Submit
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-2 mt-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-7 h-7 bg-lpeach rounded-full" />
            ))}
          </div>

          <p className="text-sm font-light text-lpeach mt-4">© Monogram 2025</p>
        </div>
      </div>
    </footer>
  );
}
