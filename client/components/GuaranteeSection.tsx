import { Shield, CheckCircle } from "lucide-react";

export default function GuaranteeSection() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 md:p-12 text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-emerald-600" />
          </div>

          <h3 className="text-2xl md:text-4xl font-bold text-emerald-800 mb-6">
            30-Day Transformation Guarantee
          </h3>

          <p className="text-lg md:text-xl text-emerald-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            If you don't experience significant improvement in your nervous
            system regulation within 30 days of following the program, we'll
            refund every penny. That's how confident we are in this
            scientifically-backed approach.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
              <span className="text-emerald-700 font-medium text-sm md:text-base">
                No Questions Asked
              </span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
              <span className="text-emerald-700 font-medium text-sm md:text-base">
                Full 30 Days
              </span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
              <span className="text-emerald-700 font-medium text-sm md:text-base">
                100% Money Back
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
