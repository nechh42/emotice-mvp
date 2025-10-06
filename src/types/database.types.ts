export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      user_profiles: {
        Row: {
          id: string
          age: number
          survey_completed: boolean
          created_at: string
        }
        Insert: {
          id: string
          age: number
          survey_completed?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          age?: number
          survey_completed?: boolean
          created_at?: string
        }
      }
      moods: {
        Row: {
          id: string
          user_id: string
          mood_type: string
          intensity: number
          note: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          mood_type: string
          intensity: number
          note?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          mood_type?: string
          intensity?: number
          note?: string | null
          created_at?: string
        }
      }
      mood_entries: {
        Row: {
          id: string
          user_id: string
          mood: string
          intensity: number
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          mood: string
          intensity: number
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          mood?: string
          intensity?: number
          created_at?: string
        }
      }
      survey_responses: {
        Row: {
          id: string
          user_id: string
          question_id: string
          answer: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          question_id: string
          answer: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          question_id?: string
          answer?: string
          created_at?: string
        }
      }
      ai_messages: {
        Row: {
          id: string
          user_id: string
          message: string
          role: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          message: string
          role: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          message?: string
          role?: string
          created_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
