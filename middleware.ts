import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const response = NextResponse.next();
    const supabase = createMiddlewareClient({
        req,
        res: response,
    });
    await supabase.auth.getSession();
    return response;
}