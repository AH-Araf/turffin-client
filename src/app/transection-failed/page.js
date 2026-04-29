import {
  Calendar,
  CreditCard,
  RefreshCw,
  ArrowLeft,
  HelpCircle,
} from "lucide-react";

export default function TransactionFailed() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-12 md:pt-[94px] pb-12">
      {/* MAIN CARD */}
      <div className="w-full max-w-[896px] mx-4 md:mx-0 rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* LEFT CARD */}
        <div className="bg-[#FFEDD5] min-h-[580px] md:h-[650px] pt-12 md:pt-[141.5px] px-6 md:px-[40px] flex flex-col items-center text-center">
          <div className="w-[96px] h-[96px] bg-white rounded-full flex items-center justify-center mb-6">
            <div className="w-[50px] h-[50px] bg-[#F97316] rounded-full flex items-center justify-center">
              <span className="text-white text-[20px] font-bold">!</span>
            </div>
          </div>

          <h2 className="font-lexend font-semibold text-3xl md:text-[32px] leading-tight md:leading-[41.6px] text-[#F97316] mb-3">
            Transaction Failed
          </h2>

          <p className="font-inter text-[15px] md:text-[16px] leading-[23px] md:leading-[24px] text-[#3D4A3E] max-w-[297px] text-center mb-10">
            Your booking request for <br />
            "Elite Stadium Pitch A" could not <br />
            be processed at this time.
          </p>

          <div className="w-full max-w-[348px] h-auto md:h-[86px] rounded-lg border border-orange-200 bg-white/50 p-5 md:p-[16px] flex flex-col items-center justify-center gap-1">
            <p className="text-[#F97316] font-inter text-[16px] leading-[24px]">
              Error Code
            </p>
            <p className="text-[#191C1E] font-inter font-bold text-[16px] leading-[24px] text-center">
              ERR_PYMT_DECLINED_042
            </p>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white min-h-[580px] md:h-[650px] p-6 md:p-[40px] flex flex-col">
          <h3 className="font-lexend text-[20px] leading-[28px] text-[#191C1E]">
            What happened?
          </h3>

          <p className="font-inter text-[15px] md:text-[16px] leading-[23px] md:leading-[24px] text-[#545F73] mt-6">
            Our payment processor was unable to verify your card details. This
            can happen due to insufficient funds, temporary banking
            interruptions, or incorrect security details.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <div className="w-full h-[58px] flex items-center justify-between px-4 rounded-lg border border-[#E0E3E5] bg-white">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#545F73]" />
                <span className="text-[#545F73] uppercase text-[16px]">
                  BOOKING DATE
                </span>
              </div>
              <span className="text-[#191C1E]">Oct 24, 2024</span>
            </div>

            <div className="w-full h-[58px] flex items-center justify-between px-4 rounded-lg border border-[#E0E3E5] bg-white">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-[#545F73]" />
                <span className="text-[#545F73] uppercase text-[16px]">
                  AMOUNT DUE
                </span>
              </div>
              <span className="font-bold text-[#191C1E]">৳120.00</span>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-4">
            <button className="w-full h-[61px] bg-[#F97316] rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors duration-200 hover:bg-[#ea580c]">
              <RefreshCw className="w-5 h-5 text-white" />
              <span className="text-white text-[18px] font-lexend">
                Retry Payment
              </span>
            </button>

            <button className="w-full h-[65px] border-2 border-[#545F73] rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors duration-200 hover:bg-[#f8fafc]">
              <ArrowLeft className="w-5 h-5 text-[#545F73]" />
              <span className="text-[#545F73] text-[18px] font-lexend">
                Back to Checkout
              </span>
            </button>
          </div>

          <div className="mt-auto pt-8 flex flex-col items-center">
            <div className="w-full max-w-[348px] h-px bg-gray-300"></div>

            <p className="mt-6 text-[#545F73] text-center">
              Still having trouble?
            </p>
            <p className="mt-2 font-bold text-[#006D36] cursor-pointer flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4" />
              Contact Support
            </p>
          </div>
        </div>
      </div>

      {/* IMAGES */}
      <div className="mt-10 md:mt-[40px] mb-12 md:mb-[115px] w-full max-w-[896px] mx-4 md:mx-0 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-[24px]">
        {/* Image 1 */}
        <div className="h-[159px] rounded-lg overflow-hidden relative">
          <img
            src="https://res.cloudinary.com/dzbg5o5wo/image/upload/f_auto,q_auto/Background_qaclhc"
            className="w-full h-full object-cover brightness-110 contrast-105 saturate-110"
            alt="Soccer ball"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/20 pointer-events-none"></div>
          <div className="absolute inset-0 backdrop-blur-[1.5px] bg-white/10 mix-blend-overlay pointer-events-none"></div>
        </div>

        {/* Image 2 */}
        <div className="h-[159px] rounded-lg overflow-hidden relative">
          <img
            src="https://res.cloudinary.com/dzbg5o5wo/image/upload/f_auto,q_auto/Background_1_axcljd"
            className="w-full h-full object-cover brightness-110 contrast-105 saturate-110"
            alt="Football pitch"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/20 pointer-events-none"></div>
          <div className="absolute inset-0 backdrop-blur-[1.5px] bg-white/10 mix-blend-overlay pointer-events-none"></div>
        </div>

        {/* Image 3 */}
        <div className="h-[159px] rounded-lg overflow-hidden relative">
          <img
            src="https://res.cloudinary.com/dzbg5o5wo/image/upload/f_auto,q_auto/Background_2_myulbi"
            className="w-full h-full object-cover brightness-110 contrast-105 saturate-110"
            alt="Grass texture"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/20 pointer-events-none"></div>
          <div className="absolute inset-0 backdrop-blur-[1.5px] bg-white/10 mix-blend-overlay pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}
