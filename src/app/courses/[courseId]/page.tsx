"use client"
import React, { useState } from 'react';
import { Send, User, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';

// --- Types ---
type Comment = {
  id: string;
  user: string;
  text: string;
  timestamp: string;
  replies?: Comment[];
  isTherapist?: boolean;
};

// --- Mock Data ---
const videoSource = {
  type: "video" as const,
  sources: [
    {
      src: "https://trutalk.b-cdn.net/portfolio-video.mp4",
      type: "video/mp4",
      size: 576,
    },
    {
      src: "https://trutalk.b-cdn.net/portfolio-video.mp4",
      type: "video/mp4",
      size: 720,
    },
    {
      src: "https://trutalk.b-cdn.net/portfolio-video.mp4",
      type: "video/mp4",
      size: 1080,
    },
  ],
  poster: "/course-autism.png"
};

const MOCK_COMMENTS: Comment[] = [
  {
    id: '1',
    user: "Emily R.",
    text: "My son struggles with the transition from school to home. Any specific tips for that?",
    timestamp: "2 days ago",
    replies: [
      {
        id: 'r1',
        user: "Dr. Sarah Bennett",
        text: "Great question, Emily. Try creating a 'transition ritual' - maybe a specific song or a sensory activity in the car before entering the house. We cover this in Module 3!",
        timestamp: "1 day ago",
        isTherapist: true
      }
    ]
  },
  {
    id: '2',
    user: "Mark T.",
    text: "Is this module suitable for teenagers as well?",
    timestamp: "3 days ago"
  }
];

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params.courseId; // In a real app, fetch course data based on this ID

  // State for Q&A
  const [comments, setComments] = useState<Comment[]>(MOCK_COMMENTS);
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      user: "You", // Placeholder for logged-in user
      text: newComment,
      timestamp: "Just now",
      replies: []
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  const handlePostReply = (commentId: string) => {
    if (!replyText.trim()) return;

    const reply: Comment = {
      id: Date.now().toString(),
      user: "You",
      text: replyText,
      timestamp: "Just now"
    };

    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...(comment.replies || []), reply]
        };
      }
      return comment;
    });

    setComments(updatedComments);
    setReplyingTo(null);
    setReplyText('');
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Breadcrumb / Back Link */}
        <div className="mb-6">
          <Link href="/courses" className="text-sage-600 hover:text-sage-800 font-bold text-sm uppercase tracking-wider flex items-center gap-2">
            &larr; Back to Courses
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content Area (Video & Description) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Video Player Container */}
            <div className="bg-black rounded-2xl shadow-2xl relative group">
               <Plyr 
                 source={videoSource} 
                 options={{
                    controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
                    settings: ['captions', 'quality', 'speed'],
                    tooltips: { controls: true, seek: true },
                    clickToPlay: true,
                    hideControls: false, // Force controls to be visible (or at least not hidden aggressively)
                    resetOnEnd: true,
                 }}
                 style={{
                    '--plyr-color-main': '#7C9082', // sage-500 hex approximation
                    '--plyr-video-control-color': '#fff',
                    '--plyr-control-icon-size': '18px',
                    width: '100%',
                    height: 'auto',
                    borderRadius: '1rem',
                    overflow: 'hidden'
                 } as React.CSSProperties}
               />
            </div>

            {/* Course Info */}
            <div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">
                    Understanding Autism: Module 1
                </h1>
                <p className="text-stone-600 leading-relaxed font-light">
                    In this first module, we explore the fundamental characteristics of autism spectrum disorder. We'll discuss sensory processing, communication differences, and how to view the world through your child's unique perspective.
                </p>
            </div>

            {/* Q&A Section */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
                <div className="flex items-center gap-3 mb-8">
                    <MessageCircle className="text-sage-600" size={24} />
                    <h2 className="text-2xl font-serif font-bold text-stone-800">Parent Q&A</h2>
                </div>

                {/* Ask Question Form */}
                <form onSubmit={handlePostComment} className="mb-10 relative">
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Ask a question about this module..."
                        className="w-full p-4 pr-14 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent resize-none min-h-[100px] text-stone-700 placeholder-stone-400"
                    />
                    <button 
                        type="submit"
                        disabled={!newComment.trim()}
                        className="absolute bottom-4 right-4 p-2 bg-sage-600 text-white rounded-lg hover:bg-sage-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <Send size={18} />
                    </button>
                </form>

                {/* Comments List */}
                <div className="space-y-8">
                    {comments.map((comment) => (
                        <div key={comment.id} className="group">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 shrink-0">
                                    <User size={20} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span className="font-bold text-stone-800">{comment.user}</span>
                                        <span className="text-xs text-stone-400">{comment.timestamp}</span>
                                    </div>
                                    <p className="text-stone-600 text-sm leading-relaxed mb-3">{comment.text}</p>
                                    <button 
                                      onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                                      className="text-xs font-bold text-sage-600 hover:text-sage-800 uppercase tracking-wider"
                                    >
                                      {replyingTo === comment.id ? 'Cancel' : 'Reply'}
                                    </button>
                                    
                                    {/* Reply Input */}
                                    {replyingTo === comment.id && (
                                      <div className="mt-4 flex gap-2 animate-fade-in-up">
                                        <input 
                                          type="text" 
                                          value={replyText}
                                          onChange={(e) => setReplyText(e.target.value)}
                                          placeholder="Write a reply..."
                                          className="flex-1 px-4 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400 text-sm"
                                          autoFocus
                                        />
                                        <button 
                                          onClick={() => handlePostReply(comment.id)}
                                          disabled={!replyText.trim()}
                                          className="px-4 py-2 bg-sage-600 text-white rounded-lg text-sm font-bold hover:bg-sage-700 disabled:opacity-50 transition-colors"
                                        >
                                          Reply
                                        </button>
                                      </div>
                                    )}
                                </div>
                            </div>

                            {/* Replies */}
                            {comment.replies?.map((reply) => (
                                <div key={reply.id} className="flex gap-4 mt-4 ml-14 pl-4 border-l-2 border-sage-100">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${reply.isTherapist ? 'bg-sage-100 text-sage-600' : 'bg-stone-200 text-stone-500'}`}>
                                        {reply.isTherapist ? <User size={16} /> : <User size={16} />}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={`font-bold ${reply.isTherapist ? 'text-sage-700' : 'text-stone-800'}`}>
                                                {reply.user}
                                                {reply.isTherapist && <span className="ml-2 text-[10px] bg-sage-200 text-sage-800 px-2 py-0.5 rounded-full uppercase tracking-wider">Therapist</span>}
                                            </span>
                                            <span className="text-xs text-stone-400">{reply.timestamp}</span>
                                        </div>
                                        <p className="text-stone-600 text-sm leading-relaxed">{reply.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

          </div>

          {/* Sidebar (Course Content) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 sticky top-28">
                <h3 className="font-serif font-bold text-xl text-stone-800 mb-6">Course Content</h3>
                <div className="space-y-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((module) => (
                        <div key={module} className={`p-4 rounded-xl border transition-all cursor-pointer ${module === 1 ? 'bg-sage-50 border-sage-200 shadow-sm' : 'bg-white border-transparent hover:bg-stone-50 hover:border-stone-200'}`}>
                            <div className="flex justify-between items-center mb-1">
                                <span className={`text-xs font-bold uppercase tracking-wider ${module === 1 ? 'text-sage-600' : 'text-stone-400'}`}>Module {module}</span>
                                {module === 1 ? (
                                    <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse"></span>
                                ) : (
                                    <span className="text-stone-300 text-xs">15 min</span>
                                )}
                            </div>
                            <h4 className={`font-bold text-sm ${module === 1 ? 'text-stone-800' : 'text-stone-500'}`}>
                                {module === 1 ? 'Understanding the Spectrum' : `Topic for Module ${module}`}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
