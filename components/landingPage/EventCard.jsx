import Image from "next/image";
import ActionButtons from "../ActionButtons";
import Link from "next/link";

const EventCard = ({ event }) => {
    return (
        <div className="overflow-hidden rounded-md bg-[#242526]">
            <Image
                src={event.imageUrl}
                alt="Event 1"
                className="w-full"
                width={500}
                height={500}
            />

            <div className="p-3">
                <Link href="/eventDetails/1" className="font-bold text-lg">{event.name}</Link>
                <p className="text-[#9C9C9C] text-sm mt-1">{event.location}</p>
                <div className="text-[#737373] text-sm mt-1">
                    <span>1k Interested</span>
                    <span>|</span>
                    <span>40K Going</span>
                </div>

                {/* Buttons  */}
                <ActionButtons />
            </div>
        </div>
    );
};

export default EventCard;