import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const token = true;

const middleware = (request: NextRequest) => {
  if (!token) {
    return NextResponse.redirect(new URL('/', request.url));
  }
};

export const config = {
  matcher: ['/home', '/forum/:page*'],
};

export default middleware;
