import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') ?? 'Next.js Boilerplate';
  const subtitle = searchParams.get('subtitle') ?? 'Welcome to our website';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          backgroundColor: 'hsl(240 10% 3.9%)',
          padding: 80,
          fontFamily: 'Inter',
        }}>
        <div
          style={{
            color: 'hsl(0 0% 98%)',
            fontSize: 70,
            fontWeight: 600,
            lineHeight: 1.2,
            marginBottom: 16,
            maxWidth: '70%',
          }}>
          {title}
        </div>
        <div
          style={{
            color: 'hsl(240 5% 64.9%)',
            fontSize: 36,
            fontWeight: 500,
            marginBottom: 40,
          }}>
          {subtitle}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: 'hsl(142.1 76.2% 36.3%)',
              marginRight: 16,
            }}
          />
          <div
            style={{
              color: 'hsl(240 5% 64.9%)',
              fontSize: 24,
              fontWeight: 500,
            }}>
            Boilerplate company
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
