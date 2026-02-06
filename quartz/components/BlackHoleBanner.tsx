import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const BlackHoleBanner: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={`black-hole-banner ${displayClass ?? ""}`}>
        <div class="black-hole-container">
          <img src="/static/blackhole.svg" alt="" class="black-hole-image" />
        </div>
      </div>
    )
  }

  BlackHoleBanner.css = `
    .black-hole-banner {
      width: 100%;
      padding: 2rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid var(--gray);
      margin-bottom: 2rem;
    }

    .black-hole-container {
      position: relative;
      width: 120px;
      height: 120px;
    }

    .black-hole-image {
      width: 100%;
      height: 100%;
      filter: drop-shadow(0 0 20px rgba(138, 43, 226, 0.5));
      animation: pulse 3s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% {
        filter: drop-shadow(0 0 20px rgba(138, 43, 226, 0.5));
      }
      50% {
        filter: drop-shadow(0 0 30px rgba(138, 43, 226, 0.8));
      }
    }
  `

  return BlackHoleBanner
}) satisfies QuartzComponentConstructor
