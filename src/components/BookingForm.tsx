import React, { useState } from 'react';
import { Sparkles, CheckCircle, AlertCircle, Calendar, Clock, Video, MapPin, User, Mail, Phone, ChevronRight } from 'lucide-react';
import { Coach } from '../data/coaches';

interface BookingFormProps {
  selectedCoach?: Coach | null;
  selectedCourseId?: string | null;
}

interface FormData {
  studentName: string;
  parentName: string;
  email: string;
  phoneNumber: string;
  chessLevel: string;
  classMode: 'Online' | 'Offline';
  preferredTime: string;
  selectedCoachId: string;
  notes: string;
}

interface FormErrors {
  [key: string]: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ selectedCoach }) => {
  const [formData, setFormData] = useState<FormData>({
    studentName: '',
    parentName: '',
    email: '',
    phoneNumber: '',
    chessLevel: '',
    classMode: 'Online',
    preferredTime: '',
    selectedCoachId: selectedCoach?.id || '',
    notes: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedPass, setSubmittedPass] = useState<{
    passId: string;
    studentName: string;
    classMode: string;
    preferredTime: string;
    chessLevel: string;
  } | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Student name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (formData.phoneNumber.replace(/\D/g, '').length < 8) {
      newErrors.phoneNumber = 'Please enter a valid phone number (at least 8 digits)';
    }

    if (!formData.chessLevel) {
      newErrors.chessLevel = 'Please select the student\'s current chess level';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred trial time slot';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate instant client-side booking confirmation with realistic slight delay
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedPassId = `CKM-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedPass({
        passId: generatedPassId,
        studentName: formData.studentName,
        classMode: formData.classMode,
        preferredTime: formData.preferredTime,
        chessLevel: formData.chessLevel
      });
    }, 700);
  };

  const handleReset = () => {
    setSubmittedPass(null);
    setFormData({
      studentName: '',
      parentName: '',
      email: '',
      phoneNumber: '',
      chessLevel: '',
      classMode: 'Online',
      preferredTime: '',
      selectedCoachId: '',
      notes: ''
    });
    setErrors({});
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Academy Value Prop & Information */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Complimentary 45-Minute Evaluation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-cinzel text-white mb-6 tracking-tight leading-tight">
              Begin Your <span className="text-gold-gradient">Chess Journey</span> With Us
            </h2>

            <p className="text-slate-300 text-base font-light leading-relaxed mb-8">
              Experience our coaching method first-hand. In this free 45-minute 1-on-1 evaluation, a master trainer will assess your tactical vision, pinpoint hidden blindspots, and map a personalized training regimen.
            </p>

            {/* Benefit Checkpoints */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Full Tactical & Positional Diagnostic</h4>
                  <p className="text-xs text-slate-400">Discover your calculation speed and tactical blindspots.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Video className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Interactive 3D Board Analysis</h4>
                  <p className="text-xs text-slate-400">Live piece-by-piece review with a certified FIDE coach.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Calendar className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Flexible Scheduling: Online or Academy Campus</h4>
                  <p className="text-xs text-slate-400">Global Zoom/Lichess classrooms or physical academy campuses.</p>
                </div>
              </div>
            </div>

            {/* Contact quick card */}
            <div className="p-5 rounded-2xl bg-neutral-900/80 border border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="text-slate-200 font-semibold mb-1">Direct Academy Inquiries:</div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>admissions@checkmatecityacademy.com (Demo)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>+1 (800) 555-CHESS / +1 (800) 555-2437</span>
              </div>
            </div>
          </div>

          {/* Right Column: Trial Booking Form Card */}
          <div id="booking" className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-9 border border-amber-500/30 shadow-2xl relative">
              
              {submittedPass ? (
                /* Success Feedback State */
                <div className="text-center py-6 animate-fade-in">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400">
                    <CheckCircle className="w-9 h-9" />
                  </div>

                  <h3 className="text-2xl font-bold font-cinzel text-white mb-2">
                    Trial Class Reserved!
                  </h3>

                  <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                    Congratulations <span className="text-amber-300 font-semibold">{submittedPass.studentName}</span>. Your trial seat has been successfully reserved in our evaluation queue.
                  </p>

                  {/* Pass Ticket Card */}
                  <div className="max-w-md mx-auto bg-neutral-950/90 rounded-2xl p-5 border border-amber-500/30 text-left mb-6 shadow-xl">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-800 text-xs">
                      <span className="text-slate-400 font-mono">TRIAL PASS CODE:</span>
                      <span className="font-mono font-bold text-amber-400 text-sm">{submittedPass.passId}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-3 text-xs">
                      <div>
                        <span className="text-slate-500 block">Class Mode:</span>
                        <span className="text-slate-200 font-medium">{submittedPass.classMode} Classroom</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Current Level:</span>
                        <span className="text-slate-200 font-medium">{submittedPass.chessLevel}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-slate-500 block">Preferred Time Window:</span>
                        <span className="text-amber-300 font-medium">{submittedPass.preferredTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20 text-xs text-amber-300/90 max-w-md mx-auto mb-6 font-mono">
                    *Client-side demo confirmation. In a live deployment, this dispatches a calendar invitation and automated SMS reminder.
                  </div>

                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl bg-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition"
                  >
                    Book Another Trial
                  </button>
                </div>
              ) : (
                /* The Booking Form */
                <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-2">
                    <div>
                      <h3 className="text-xl font-bold font-cinzel text-white">
                        Book Your Free Trial Class
                      </h3>
                      <p className="text-xs text-slate-400">
                        Fill in student details below. No credit card required.
                      </p>
                    </div>
                    <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                      100% Free
                    </span>
                  </div>

                  {/* Student & Parent Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Student Full Name <span className="text-amber-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={formData.studentName}
                          onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                          placeholder="e.g. Liam Sterling"
                          className={`w-full pl-10 pr-3 py-2.5 rounded-xl bg-neutral-950 border ${
                            errors.studentName ? 'border-red-500' : 'border-slate-800 focus:border-amber-400'
                          } text-sm text-white placeholder-slate-600 focus:outline-none transition`}
                        />
                      </div>
                      {errors.studentName && (
                        <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.studentName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Parent / Guardian Name <span className="text-slate-500 text-[10px]">(Optional for youth)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        placeholder="e.g. David Sterling"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-slate-800 focus:border-amber-400 text-sm text-white placeholder-slate-600 focus:outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address <span className="text-amber-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="student@example.com"
                          className={`w-full pl-10 pr-3 py-2.5 rounded-xl bg-neutral-950 border ${
                            errors.email ? 'border-red-500' : 'border-slate-800 focus:border-amber-400'
                          } text-sm text-white placeholder-slate-600 focus:outline-none transition`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone Number <span className="text-amber-400">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className={`w-full pl-10 pr-3 py-2.5 rounded-xl bg-neutral-950 border ${
                            errors.phoneNumber ? 'border-red-500' : 'border-slate-800 focus:border-amber-400'
                          } text-sm text-white placeholder-slate-600 focus:outline-none transition`}
                        />
                      </div>
                      {errors.phoneNumber && (
                        <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phoneNumber}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Current Chess Level & Class Mode */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Current Chess Level <span className="text-amber-400">*</span>
                      </label>
                      <select
                        value={formData.chessLevel}
                        onChange={(e) => setFormData({ ...formData, chessLevel: e.target.value })}
                        className={`w-full px-3 py-2.5 rounded-xl bg-neutral-950 border ${
                          errors.chessLevel ? 'border-red-500' : 'border-slate-800 focus:border-amber-400'
                        } text-sm text-white focus:outline-none transition`}
                      >
                        <option value="">Select current level...</option>
                        <option value="Complete Beginner (Just learning moves)">Complete Beginner (Just learning moves)</option>
                        <option value="Novice / Club Beginner (Under 1000 ELO)">Novice / Club Beginner (Under 1000 ELO)</option>
                        <option value="Intermediate Player (1000 – 1500 ELO)">Intermediate Player (1000 – 1500 ELO)</option>
                        <option value="Advanced Competitive (1500 – 1900 ELO)">Advanced Competitive (1500 – 1900 ELO)</option>
                        <option value="Titled Norm Pursuer (2000+ FIDE)">Titled Norm Pursuer (2000+ FIDE)</option>
                      </select>
                      {errors.chessLevel && (
                        <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.chessLevel}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Preferred Class Mode <span className="text-amber-400">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, classMode: 'Online' })}
                          className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border transition ${
                            formData.classMode === 'Online'
                              ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                              : 'bg-neutral-950 border-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          <Video className="w-3.5 h-3.5" />
                          Online (Zoom)
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, classMode: 'Offline' })}
                          className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border transition ${
                            formData.classMode === 'Offline'
                              ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                              : 'bg-neutral-950 border-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          <MapPin className="w-3.5 h-3.5" />
                          Academy Center
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Preferred Time Slot */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Preferred Evaluation Time <span className="text-amber-400">*</span>
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className={`w-full px-3 py-2.5 rounded-xl bg-neutral-950 border ${
                        errors.preferredTime ? 'border-red-500' : 'border-slate-800 focus:border-amber-400'
                      } text-sm text-white focus:outline-none transition`}
                    >
                      <option value="">Select a preferred time window...</option>
                      <option value="Weekday Mornings (09:00 AM – 12:00 PM EST)">Weekday Mornings (09:00 AM – 12:00 PM EST)</option>
                      <option value="Weekday Afternoons (02:00 PM – 05:00 PM EST)">Weekday Afternoons (02:00 PM – 05:00 PM EST)</option>
                      <option value="Weekday Evenings (06:00 PM – 09:00 PM EST)">Weekday Evenings (06:00 PM – 09:00 PM EST)</option>
                      <option value="Saturday Intensive (10:00 AM – 02:00 PM EST)">Saturday Intensive (10:00 AM – 02:00 PM EST)</option>
                      <option value="Sunday Masterclass (01:00 PM – 05:00 PM EST)">Sunday Masterclass (01:00 PM – 05:00 PM EST)</option>
                    </select>
                    {errors.preferredTime && (
                      <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.preferredTime}
                      </p>
                    )}
                  </div>

                  {/* Notes / Goals */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Student Chess Goals / Favorite Openings <span className="text-slate-500 text-[10px]">(Optional)</span>
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Wanting to improve tactical calculation, plays 1.e4, preparing for upcoming state tournament..."
                      className="w-full px-3.5 py-2 rounded-xl bg-neutral-950 border border-slate-800 focus:border-amber-400 text-xs text-white placeholder-slate-600 focus:outline-none transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-neutral-950 shadow-xl shadow-amber-500/25 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin"></span>
                          <span>Reserving Trial Class...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>Reserve My Free 45-Minute Trial</span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-500 font-mono mt-3">
                    *Instant client-side verification. No commitment, credit card, or hidden charges.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
