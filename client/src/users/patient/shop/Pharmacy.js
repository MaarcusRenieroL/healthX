import React from "react";

import { Header } from "../../../components/Header/Header";

import { StoreNavigation } from "./StoreNavigation";
import { PromoSection } from "./PromoSection";
import { ProductCategory } from "./ProductCategory";
import { ProductList } from "./ProductList";

import { Footer } from "../../../components/Footer/Footer";






export const PatientPharmacy = () => {
    return (
        <>
            {/*<PatientNavbar />*/}
            <StoreNavigation />
            <div className="p-7">
                <PromoSection />
                <ProductCategory />
                <ProductList />
                <Footer />
            </div>
        </>
    );
}
