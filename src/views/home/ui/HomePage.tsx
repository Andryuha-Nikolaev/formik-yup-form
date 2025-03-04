import { TestForm } from "@/features/send-test-form";
import s from "./HomePage.module.scss";
import { ContentLayout } from "@/shared/layouts/content-layout";
import { RealEstateForm } from "@/features/send-real-estate-form";

export const HomePage = () => {
  return (
    <ContentLayout>
      <div className={s.block}>
        <TestForm />
        <RealEstateForm />
      </div>
    </ContentLayout>
  );
};
