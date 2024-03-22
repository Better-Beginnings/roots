import { z } from "zod";
import { range } from "~/lib/utils/range";

export const propertiesFilters = z.object({
  price: range.optional(),
  sort: z.enum(["price_asc", "price_desc"]).optional(),
  item_location: z.string(),
  offset: z.number().optional(),
  OPERATION: z.array(z.string()).optional(),
  PROPERTY_TYPE: z.array(z.string()).optional(),
  TOTAL_AREA: range.optional(),
  COVERED_AREA: range.optional(),
  BALCONY_AREA: range.optional(),
  ROOMS: range.optional(),
  BEDROOMS: range.optional(),
  WHEELCHAIR_RAMP: z.boolean().optional(),
  TOWER_NUMBER: z.number().optional(),
  FULL_BATHROOMS: range.optional(),
  PARKING_LOTS: range.optional(),
  FLOORS: range.optional(),
  UNIT_FLOOR: z.number().optional(),
  APARTMENT_PROPERTY_SUBTYPE: z.array(z.string()).optional(),
  WITH_GATED_COMMUNITY: z.boolean().optional(),
  DISPOSITION: z.array(z.string()).optional(),
  FACING: z.array(z.string()).optional(),
  PROPERTY_AGE: range.optional(),
  MAINTENANCE_FEE: range.optional(),
  HAS_INTERNET_ACCESS: z.boolean().optional(),
  HAS_TAP_WATER: z.boolean().optional(),
  HAS_AIR_CONDITIONING: z.boolean().optional(),
  HAS_BALCONY: z.boolean().optional(),
  HAS_BOILER: z.boolean().optional(),
  HAS_HEATING: z.boolean().optional(),
  HAS_INDOOR_FIREPLACE: z.boolean().optional(),
  HAS_CISTERN: z.boolean().optional(),
  HAS_KITCHEN: z.boolean().optional(),
  HAS_DINNING_ROOM: z.boolean().optional(),
  HAS_MAID_ROOM: z.boolean().optional(),
  HAS_BREAKFAST_BAR: z.boolean().optional(),
  HAS_BEDROOM_SUITE: z.boolean().optional(),
  HAS_STUDY: z.boolean().optional(),
  SECURITY_TYPE: z.array(z.string()).optional(),
  WITH_LAUNDRY_CONNECTION: z.boolean().optional(),
  WITH_GREEN_AREA: z.boolean().optional(),
  IS_SUITABLE_FOR_PETS: z.boolean().optional(),
  HAS_ELECTRIC_GENERATOR: z.boolean().optional(),
  HAS_SAUNA: z.boolean().optional(),
  HAS_FRIDGE: z.boolean().optional(),
  FURNISHED: z.boolean().optional(),
  HAS_FRONT_DESK: z.boolean().optional(),
  HAS_NATURAL_GAS: z.boolean().optional(),
  HAS_JACUZZI: z.boolean().optional(),
  HAS_GARDEN: z.boolean().optional(),
  HAS_LAUNDRY: z.boolean().optional(),
  HAS_TELEPHONE_LINE: z.boolean().optional(),
  HAS_LIVING_ROOM: z.boolean().optional(),
  HAS_PATIO: z.boolean().optional(),
  HAS_CLOSETS: z.boolean().optional(),
  HAS_TERRACE: z.boolean().optional(),
  HAS_HALF_BATH: z.boolean().optional(),
  HAS_DRESSING_ROOM: z.boolean().optional(),
  HAS_CINEMA_HALL: z.boolean().optional(),
  HAS_PLAYGROUND: z.boolean().optional(),
  HAS_LIFT: z.boolean().optional(),
  HAS_BUSINESS_CENTER: z.boolean().optional(),
  HAS_TENNIS_COURT: z.boolean().optional(),
  HAS_GUEST_PARKING: z.boolean().optional(),
  HAS_GYM: z.boolean().optional(),
  HAS_COMMON_LAUNDRY: z.boolean().optional(),
  HAS_GRILL: z.boolean().optional(),
  HAS_SWIMMING_POOL: z.boolean().optional(),
  HAS_PLAYROOM: z.boolean().optional(),
  HAS_ROOF_GARDEN: z.boolean().optional(),
  HAS_PARTY_ROOM: z.boolean().optional(),
  HAS_MULTIPURPOSE_ROOM: z.boolean().optional(),
  HAS_SECURITY: z.boolean().optional(),
  ITEM_CONDITION: z.array(z.string()).optional(),
});

export type PropertiesFilters = z.infer<typeof propertiesFilters>;
