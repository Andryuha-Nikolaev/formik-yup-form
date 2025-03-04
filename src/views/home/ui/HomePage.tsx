import { TestForm } from "@/features/send-test-form/ui/TestForm";
import s from "./HomePage.module.scss";
import { ContentLayout } from "@/shared/layouts/content-layout";

export const HomePage = () => {
  return (
    <ContentLayout>
      <div className={s.block}>
        <TestForm />
      </div>
    </ContentLayout>
  );
};
