import * as React from "react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,    
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const MapSearch = () => {
    return (
        <div className="mx-auto max-w-fit pt-10 px-10">
            <div className="flex gap-x-2">
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="전체" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="전체">전체</SelectItem>
                            <SelectItem value="서울">서울</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Input type="text" placeholder="검색어 입력" />
                <Button>
                    검색
                </Button>
            </div>
        </div>        
    )
}