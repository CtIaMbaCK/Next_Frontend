import type { Metadata } from "next";
// Font Inter nên được cấu hình ở Root Layout, nhưng nếu bạn muốn override ở đây thì import,
// tuy nhiên class font-display nên được kế thừa từ cha.
import HomeHeader from "@/components/HomePageHeader";

export const metadata: Metadata = {
  title: "BetterUS",
  description: "BetterUS cho Tổ chức xã hội",
};

export default function HomePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // THAY ĐỔI: Sử dụng div thay vì html/body. 
    // Thêm các class bg-gray-100 vào đây để giữ style nền.
    <div className="flex flex-col h-screen w-full overflow-hidden bg-gray-100 font-display">
        
        {/* Header cố định ở trên cùng */}
        <HomeHeader />
        
        {/* Nội dung thay đổi (Children) */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          {children}
        </main>
    </div>
  );
}