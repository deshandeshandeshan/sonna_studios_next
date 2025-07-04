"use client";

import { HOME_QUERYResult } from "@/sanity/types";
import { useState } from "react";
import emailjs from "emailjs-com";

import "../grid.css";
import "./BookingBlock.css";

type bookingBlockProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "bookingBlock" }
>;

export function BookingBlock({
  enquiryDescription,
  contactDescription,
  pricingDescription,
  generalEnquiries,
  socialLinks,
}: bookingBlockProps) {
  const validSocialLinks =
    Array.isArray(socialLinks) && socialLinks.length > 0 ? socialLinks : [];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    businessName: "",
    service: "",
    projectDescription: "",
    eventDateAndTime: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Typing the event parameter for handleChange
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Typing the event parameter for handleFormSubmit
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    const form = e.currentTarget as HTMLFormElement;
    const isBot = (form.elements.namedItem("company") as HTMLInputElement)
      ?.value;

    if (isBot) {
      setIsSubmitting(false);
      setError("Bot submission detected.");
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.send(
        "service_8cj18f6",
        "template_6ep1los",
        formData,
        "Prj0NjWvdRqcp1nBj"
      );

      if (result.status === 200) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          businessName: "",
          service: "",
          projectDescription: "",
          eventDateAndTime: "",
          budget: "",
        }); // Reset the form after successful submission
      } else {
        setError("Please check all fields have been filled");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        // Handle the specific error message
        setError("An error occurred: " + error.message);
      } else {
        // Fallback for unknown error types
        setError("An unknown error occurred.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="grid mobile-padding">
      <div className="booking-enquiries spacing-120">
        <h2 className="type-detail-regular">Project Enquiries</h2>
        <p className="type-sub">{enquiryDescription}</p>
      </div>
      <div className="booking-details spacing-120">
        <div className="spacing-32">
          <h3 className="type-detail-regular">Contact</h3>
          <p className="type-body">{contactDescription}</p>
        </div>
        <div className="spacing-32">
          <h3 className="type-detail-regular">Pricing</h3>
          <p className="type-body">{pricingDescription}</p>
        </div>
        <div className="spacing-32">
          <h3 className="type-detail-regular">General Enquiries</h3>
          <ul>
            <li className="type-body text-grey link">
              <a href={`mailto:${generalEnquiries?.email}`}>
                {generalEnquiries?.email}
              </a>
            </li>
            <li className="type-body text-grey link">
              <a href={`tel:${generalEnquiries?.phone?.replace(/\s+/g, "")}`}>
                {generalEnquiries?.phone}
              </a>
            </li>
          </ul>
        </div>
        <div className="spacing-32">
          <h3 className="type-detail-regular">Social Links</h3>
          <ul className="social-links-list">
            {validSocialLinks.map((socialLink, index) => (
              <li key={index}>
                <a
                  className="type-body text-grey link"
                  href={socialLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialLink.platform}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Success and Error Messages */}
      {success && (
        <div className="success-message">
          <p className="type-body">
            Thank you! Your form has been successfully submitted.
          </p>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p className="type-body">{error}</p>
        </div>
      )}

      <div className="booking-form">
        <form onSubmit={handleFormSubmit} className="space-y-4" noValidate>
          <fieldset className="fieldset fieldset-margin">
            <legend className="form-legend spacing-40 type-body">
              <div className="type-detail-regular text-grey">1.0</div>Please
              provide us with some details
            </legend>
            <div className="spacing-24">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="input type-body"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="spacing-24">
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="input type-body"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="spacing-24">
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="Phone"
                className="input type-body"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="spacing-24">
              <label htmlFor="location" className="sr-only">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                required
                className="input type-body"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label htmlFor="businessName" className="sr-only">
                What is your business name?
              </label>
              <input
                id="businessName"
                name="businessName"
                type="text"
                required
                className="input type-body"
                placeholder="What is your business name?"
                value={formData.businessName}
                onChange={handleChange}
              />
            </div>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="form-legend spacing-40 type-body">
              <div className="type-detail-regular text-grey">2.0</div>Tell us
              about your project
            </legend>
            <div className="spacing-form-custom">
              <label htmlFor="service" className="sr-only">
                Select a service
              </label>
              <select
                name="service"
                id="service"
                value={formData.service}
                onChange={handleChange}
                className="type-body form-select"
              >
                <option value="">Choose a service</option>
                <option value="photography">Photography</option>
                <option value="videography">Videography</option>
                <option value="photography-and-videography-">
                  Photography and Videography
                </option>
              </select>
            </div>
            <div className="spacing-24">
              <label
                htmlFor="projectDescription"
                className="type-body text-area-label"
              >
                Please tell us about your project
              </label>
              <textarea
                name="projectDescription"
                id="projectDescription"
                rows={4}
                cols={50}
                placeholder="..."
                required
                value={formData.projectDescription}
                onChange={handleChange}
                className="type-body text-area"
              ></textarea>
            </div>
            <div className="spacing-24">
              <label htmlFor="eventDateAndTime" className="sr-only">
                Event date & time
              </label>
              <input
                id="eventDateAndTime"
                name="eventDateAndTime"
                type="text"
                required
                className="input type-body"
                placeholder="Event date & time"
                value={formData.eventDateAndTime}
                onChange={handleChange}
              />
            </div>
            <div className="spacing-24">
              <label htmlFor="budget" className="sr-only">
                What is your budget for this project?
              </label>
              <select
                name="budget"
                id="budget"
                value={formData.budget}
                onChange={handleChange}
                className="type-body form-select"
              >
                <option value="">What is your budget for this project?</option>
                <option value="less-than-1000">Less than $1000</option>
                <option value="1000-2500">$1000 - $2500</option>
                <option value="2500-5000">$2500 - $5000</option>
                <option value="5000-10000">$5000 - $10,000</option>
                <option value=">more-than-10000">More Than $10,000</option>
              </select>
            </div>
            <div className="hidden sr-only">
              <label htmlFor="company">
                Do not fill this out (bot prevention)
              </label>
              <input
                type="hidden"
                id="company"
                name="company"
                autoComplete="off"
                tabIndex={-1}
              />
            </div>
            <button
              type="submit"
              className="type-body booking-button"
              aria-label="Submit the form"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
}
