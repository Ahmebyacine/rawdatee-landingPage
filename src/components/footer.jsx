import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4 text-primary text-sm">Rawdatee</h3>
          <p className="text-xs">Smart kindergarten management made simple.</p>
          <p className="text-xs">Built for schools, loved by parents.</p>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold mb-4 text-xs text-muted-foreground">Product</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/features">Features</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="#parent-app">Parent App</Link></li>
            <li><Link href="#FAQ">FAQ</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-4 text-xs text-muted-foreground">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/docs">Terms of Service</Link></li>
            <li><Link href="/community">Privacy Policy</Link></li>
            <li><Link href="/guides">Support</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4 text-xs text-muted-foreground">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/help">support@rowdatee.com</Link></li>
            <li><Link href="/contact">WhatsApp</Link></li>
            <li><Link href="/status">Telegram</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Rawdatee. All rights reserved.
      </div>
    </footer>
  );
}
