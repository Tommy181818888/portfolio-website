import { PageHeader } from '@/components/shared/PageHeader';
import { WorksGrid } from '@/components/sections/WorksGrid';

export function Work() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Works"
        description="It has been an absolute pleasure to put my heart and soul into these projects. While you're here, browse these projects."
      />
      <WorksGrid />
    </div>
  );
}
