import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import getSongs from "./getSongs";

const getSongsByTitle = async (title: string): Promise<Song[]> => {
    const supabase = createServerComponentClient({
        cookies
    });

    if(!title) {
      const allSongs = await getSongs();
      return allSongs;  
    }
   const { data: sessionData, error } = await supabase.auth.getSession();

   if(error) {
       console.log(error);
       return [];
   }

   const { data, error: songError } = await supabase.from('songs').select('*').ilike('title', `%${title}%`).order('created_at', { ascending: false });

   return (data as any) || [];
}

export default getSongsByTitle;