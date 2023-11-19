import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getSongsByUserId = async (): Promise<Song[]> => {
    const supabase = createServerComponentClient({
        cookies
    });
   const { data: sessionData, error } = await supabase.auth.getSession();

   if(error) {
       console.log(error);
       return [];
   }

   const { data, error: songError } = await supabase.from('songs').select('*').eq('user_id', sessionData.session?.user.id).order('created_at', { ascending: false });

   return (data as any) || [];
}

export default getSongsByUserId;