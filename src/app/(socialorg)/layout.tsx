import type { Metadata } from "next";
// import { Inter } from "next/font/google"; // Font nên được cấu hình ở Root Layout, không cần ở đây trừ khi bạn muốn override
import Sidebar from "@/components/socialorg/Sidebar";
import Header from "@/components/socialorg/Header";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "BetterUS",
  description: "Hệ thống phía Tổ chức xã hội",
};

export default function SocialOrgLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Bỏ html, head, body. Chỉ giữ lại div bao ngoài cùng.
    // Class font và nền nên được chuyển vào div này hoặc kế thừa từ Root Layout
    <div className="flex h-screen w-full overflow-hidden bg-gray-100 font-display"> 
      
      {/* Sidebar cố định bên trái */}
      <Sidebar />

      {/* Phần nội dung chính bên phải */}
      <div className="flex flex-col flex-1 h-screen overflow-hidden">
        {/* Header cố định ở trên cùng của phần nội dung */}
        <Header />
        
        {/* Nội dung thay đổi (Children) */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}