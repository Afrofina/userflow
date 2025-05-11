import React from "react";
import { MainLayout } from "@/components/layouts";
// import { SchoolForm, UtilitySidebar } from '@/components/organisms'
import StudentDetailForm from "@/components/organisms/PayUtility/schoolForm";
export default function Page() {
  return (
    <MainLayout>
      <div className="flex justify-center w-full h-full overflow-auto px-4">
        <div className="lg:w-1/3 w-full">
          <StudentDetailForm />
        </div>
      </div>
    </MainLayout>
  );
}
