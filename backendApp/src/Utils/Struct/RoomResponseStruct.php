<?php


namespace App\Utils\Struct;


use App\Entity\Room;

class RoomResponseStruct
{
    /** @var int */
    public $id;

    /** @var string */
    public $name;

    /** @var int */
    public $maxPeople;

    /** @var int */
    public $peopleInRoom;


    public static function mapFromRoom(Room $room)
    {
        $struct = new RoomResponseStruct();
        $struct->id = $room->getId();
        $struct->name = $room->getName();
        $struct->maxPeople = $room->getMaxPeople();
        $struct->peopleInRoom = count($room->getUsersInRoom());
        return $struct;
    }

}