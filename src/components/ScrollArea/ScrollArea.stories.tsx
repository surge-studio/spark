import { ScrollArea } from './ScrollArea';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof ScrollArea>;

const meta: Meta<typeof ScrollArea> = {
  component: ScrollArea,
  args: {
    className: 'h-[200px] w-[350px] rounded border',
    children: (
      <div className="p-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis
        accumsan sapien eget euismod. Sed eu lectus felis. Pellentesque luctus
        eleifend risus, nec vulputate neque placerat at. Praesent viverra mattis
        convallis. Suspendisse vehicula sollicitudin tincidunt. Aenean eget
        convallis enim, nec posuere ligula. Vestibulum sit amet tempus quam, eu
        auctor elit. Fusce tempor mi pretium, suscipit ante a, accumsan odio.
        Curabitur sed tincidunt nulla. Maecenas pretium est vitae sem laoreet,
        at dignissim neque hendrerit. Donec tempus placerat lectus. Cras
        interdum nibh nunc, a rutrum velit feugiat sed.
      </div>
    ),
  },
};

export default meta;

export const Default: Story = {};
