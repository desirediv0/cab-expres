import { z } from "zod";

export const cabBookingSchema = z.object({
  pickupCity: z.string().min(1, "Pickup city is required"),
  destinationCity: z.string().min(1, "Destination city is required"),
  travelDate: z.string().min(1, "Travel date is required"),
  phoneNumber: z.string().min(10, "Please enter a valid mobile number"),
});

export const roundTripSchema = z.object({
  pickupCity: z.string().min(1, "Pickup city is required"),
  destinationCity: z.string().min(1, "Destination city is required"),
  startDate: z.string().min(1, "Start date is required"),
  returnDate: z.string().min(1, "Return date is required"),
  phoneNumber: z.string().min(10, "Please enter a valid mobile number"),
});

export const multiCitySchema = z.object({
  cities: z.array(z.string().min(1, "City is required")).min(2, "At least 2 cities required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  phoneNumber: z.string().min(10, "Please enter a valid mobile number"),
});

export const localSchema = z.object({
  pickupCity: z.string().min(1, "Pickup city is required"),
  travelDate: z.string().min(1, "Travel date is required"),
  phoneNumber: z.string().min(10, "Please enter a valid mobile number"),
});

export const airportPickupSchema = z.object({
  pickupCity: z.string().min(1, "Pickup city is required"),
  airport: z.string().min(1, "Airport is required"),
  travelDate: z.string().min(1, "Travel date is required"),
  phoneNumber: z.string().min(10, "Please enter a valid mobile number"),
});

export const airportDropSchema = z.object({
  dropCity: z.string().min(1, "Drop city is required"),
  airport: z.string().min(1, "Airport is required"),
  travelDate: z.string().min(1, "Travel date is required"),
  phoneNumber: z.string().min(10, "Please enter a valid mobile number"),
});

export const taxiPackageSchema = z.object({
  fromCity: z.string().min(1, "From city is required"),
  toCity: z.string().min(1, "To city is required"),
  travelDate: z.string().min(1, "Travel date is required"),
  phoneNumber: z.string().min(10, "Please enter a valid mobile number"),
});

export const holidayPackageSchema = z.object({
  fromCity: z.string().min(1, "From city is required"),
  destinationCity: z.string().min(1, "Destination city is required"),
  travelDate: z.string().min(1, "Travel date is required"),
  phoneNumber: z.string().min(10, "Please enter a valid mobile number"),
});

export const cabInquirySchema = z.object({
  name: z.string().min(1, "Please enter your full name"),
  phone: z.string().min(10, "Please enter a valid mobile number"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select an option"),
  message: z.string().optional(),
});

export const holidayInquirySchema = z.object({
  name: z.string().min(1, "Please enter your full name"),
  phone: z.string().min(10, "Please enter a valid mobile number"),
  email: z.string().email("Please enter a valid email address"),
  packageName: z.string().optional(),
  message: z.string().optional(),
});

export const contactSchema = z.object({
  name: z.string().min(1, "Please enter your full name"),
  phone: z.string().min(10, "Please enter a valid mobile number"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export type CabBookingForm = z.infer<typeof cabBookingSchema>;
export type RoundTripForm = z.infer<typeof roundTripSchema>;
export type MultiCityForm = z.infer<typeof multiCitySchema>;
export type LocalForm = z.infer<typeof localSchema>;
export type AirportPickupForm = z.infer<typeof airportPickupSchema>;
export type AirportDropForm = z.infer<typeof airportDropSchema>;
export type TaxiPackageForm = z.infer<typeof taxiPackageSchema>;
export type HolidayPackageForm = z.infer<typeof holidayPackageSchema>;
export type CabInquiryForm = z.infer<typeof cabInquirySchema>;
export type HolidayInquiryForm = z.infer<typeof holidayInquirySchema>;
export type ContactForm = z.infer<typeof contactSchema>;

export const partnerSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  companyName: z.string().min(2, "Company name is required"),
  phone: z.string().min(10, "Please enter a valid mobile number"),
  email: z.string().email("Please enter a valid email address"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  vehicleType: z.string().min(1, "Please select an option"),
  numberOfVehicles: z.string().min(1, "Please select an option"),
  description: z.string().optional(),
  agree: z.boolean().refine((val) => val === true, {
    message: "You must agree to be contacted by CabExpress",
  }),
});

export type PartnerForm = z.infer<typeof partnerSchema>;