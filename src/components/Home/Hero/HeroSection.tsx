import React from 'react'
import cn from 'classnames'

import { ReactComponent as ArrowRight } from '../../../../static/img/arrow-right-black.svg'
import { ReactComponent as ArrowDown } from '../../../../static/img/arrow-down-white.svg'
import { ReactComponent as StarGithub } from '../../../../static/img/landing/star-github.svg'

import * as styles from './styles.module.css'

interface ISectionProps {
  className?: string
  children?: React.ReactNode
}

const SectionWrapper = ({ className, children }: ISectionProps) => (
  <div className={cn('w-full flex', className)}>{children}</div>
)

const Section = ({ className, children }: ISectionProps) => (
  <div
    className={cn(
      'w-1/2 px-6 py-10',
      'flex flex-col items-center justify-center gap-8',
      'text-center',
      className
    )}
  >
    {children}
  </div>
)

const Badge = ({ className, children }: ISectionProps) => (
  <div
    className={cn(
      'mt-4',
      'px-3 py-0 rounded-lg',
      'w-fit',
      'mx-auto',
      'flex items-center justify-center gap-2',
      'text-xl font-medium',
      className
    )}
  >
    {children}
  </div>
)

export const CTAButton = ({ className, children }: ISectionProps) => (
  <button
    className={cn(
      'py-4 px-5  rounded-lg',
      'text-xl font-medium ',
      'flex items-center',
      className
    )}
  >
    {children}
  </button>
)

const HeroSection = () => {
  return (
    <>
      {/* Title Section */}
      <SectionWrapper>
        <Section className="bg-dark text-light">
          <img src={'/img/logos/dvcx.svg'} alt="DVCx Logo" />
          <div>
            <h2 className="text-3xl font-medium">Dataset versioning</h2>
            <Badge className="bg-light text-dark">Coming soon</Badge>
          </div>
        </Section>
        <Section className="bg-light">
          <img src={'/img/logos/dvc.svg'} alt="DVC Logo" />
          <div>
            <h2 className="text-3xl font-medium">ML model versioning</h2>
            <Badge className="bg-dark text-light">
              11.4K
              <StarGithub />
            </Badge>
          </div>
        </Section>
      </SectionWrapper>
      {/* Visualization Section */}
      <SectionWrapper className={styles.sectionViz}>
        <div className={cn(styles.centered, styles.gridContainer)}>
          <img
            src={'/img/landing/Hero Visualization.svg'}
            className={styles.heroViz}
            alt="Visualization"
          />
          <div className={cn(styles.heroDesc, styles.dvcxDesc)}>
            <strong>Explore</strong> and <strong>enrich</strong> annotated
            datasets with custom embeddings, auto-labeling, and bias removal at
            billion-file scale — without modifying your data.
          </div>

          <div className={cn(styles.heroDesc, styles.dvcDesc)}>
            <strong>Connect</strong> to versioned data sources and code with
            pipelines, <strong>track</strong> experiments,{' '}
            <strong>register</strong> models — all based on GitOps principles.
          </div>
        </div>
        <Section className="bg-dark text-light" />
        <Section className="bg-light text-dark" />
      </SectionWrapper>

      {/* CTA Section */}

      <SectionWrapper>
        <Section className="bg-dark text-light pt-1">
          <CTAButton className="bg-light text-dark">
            Get on the waitlist
            <ArrowRight className="ml-4" />
          </CTAButton>
        </Section>
        <Section className="bg-light text-dark pt-1">
          <CTAButton className="bg-dark text-light">
            Download it now
            <ArrowDown className="ml-4" />
          </CTAButton>
        </Section>
      </SectionWrapper>
    </>
  )
}

export default HeroSection
