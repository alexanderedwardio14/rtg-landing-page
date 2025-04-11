import { useState } from "react"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Loader2, 
  CheckCircle, 
  XCircle 
} from "lucide-react"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="flex-1">
      <section className="container py-8 space-y-6 bg-slate-50 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Contact Us
          </h1>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Have questions? We'd love to hear from you. Send us a message
            and we'll respond as soon as possible.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="grid gap-6">
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div className="space-y-1">
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-sm text-muted-foreground">(123) 456-7890</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div className="space-y-1">
                    <h3 className="font-bold">Email</h3>
                    <p className="text-sm text-muted-foreground">info@rtg.com</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div className="space-y-1">
                    <h3 className="font-bold">Location</h3>
                    <p className="text-sm text-muted-foreground">123 Business Street</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    required
                    disabled={isSubmitting}
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    required
                    disabled={isSubmitting}
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  required
                  disabled={isSubmitting}
                  placeholder="How can we help?"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  required
                  disabled={isSubmitting}
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
              {submitStatus === "success" && (
                <div className="flex items-center space-x-2 text-sm text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  <span>Message sent successfully!</span>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="flex items-center space-x-2 text-sm text-red-600">
                  <XCircle className="h-4 w-4" />
                  <span>Failed to send message. Please try again.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage