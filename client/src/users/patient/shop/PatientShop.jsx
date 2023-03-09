import React from "react";

import { StoreNavigation } from "./StoreNavigation";
import { PromoSection } from "./PromoSection";
import { ProductCategory } from "./ProductCategory";
import { ProductList } from "./ProductList";
import {Footer} from "../../../components/Footer";


export const PatientShop = () => {
    return (
        <>
            <StoreNavigation />
            <div className="">
                <PromoSection />
                <ProductCategory />
                <ProductList />
                <Footer />
            </div>
        </>
    );
}
