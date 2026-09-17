export type Course = "starter" | "main" | "dessert";

export interface MenuItem {
  id: number;
  name: string;
  course: Course;
  price: number;
  nutrition: {
    calories: number;
    allergens: string[];
  };
  discountPercent?: number;
  availableFrom?: Date;
}

export interface ComboDeal {
  id: number;
  name: string;
  items: MenuItem[];
  price: number;
}

export type OrderLine = MenuItem | ComboDeal;

export type KitchenTicket = Readonly<
  Pick<MenuItem, "name" | "course">
>;

export type AllergyCard = Omit<MenuItem, "nutrition"> & {
  warning: string;
};