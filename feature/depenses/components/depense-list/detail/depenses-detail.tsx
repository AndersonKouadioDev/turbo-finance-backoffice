"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, Calendar, User, DollarSign, Percent, Hash } from "lucide-react";
import { Depense } from "@/feature/depenses/types/depenses.types";
import Image from "next/image";
interface DepenseDetailModalProps {
    depense: Depense;
}

export function DepenseDetailModal({ depense }: DepenseDetailModalProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="flex items-center gap-2 cursor-pointer hover:text-blue-800 transition-colors">
                    <Eye className="h-5 w-5 text-red-500" />
                    <span className="hidden md:flex text-sm font-medium">Voir détails</span>
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 ">
                        <Image
                            src="/assets/images/logo_turbo.jpg"
                            alt="logo_turbo"
                            width={50}
                            height={50}
                            className="rounded-lg"
                        />
                        Détails de la depense <span className="font-bold text-red-500">REF-{depense.id}</span>
                    </DialogTitle>
                </DialogHeader>

                <div className="grid gap-6 py-4">
                    {/* Ligne Référence */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="reference" className="text-right flex items-center gap-2">
                            <Hash className="h-4 w-4" />
                            Référence
                        </Label>
                        <Input
                            id="reference"
                            defaultValue={"REF-" + depense.id}
                            className="col-span-3"
                            readOnly
                        />
                    </div>

                    {/* Ligne Date */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="date" className="text-right flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            Date
                        </Label>
                        <Input
                            id="date"
                            defaultValue={depense.date}
                            className="col-span-3"
                            readOnly
                        />
                    </div>

                    {/* Ligne Livreur */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="livreur" className="text-right flex items-center gap-2">
                            <User className="h-4 w-4" />
                            Libelle
                        </Label>
                        <Input
                            id="livreur"
                            defaultValue={depense.libelle}
                            className="col-span-3"
                            readOnly
                        />
                    </div>

                    {/* Ligne Coût Livraison */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="coutLivraison" className=" flex items-center gap-2">
                            <DollarSign className="h-4 w-4" />
                            Categories
                        </Label>
                        <Input
                            id="coutLivraison"
                            defaultValue={`${depense.categories}`}
                            className="col-span-3"
                            readOnly
                        />
                    </div>

                    {/* Ligne Coût Commande */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="coutCommande" className=" flex items-center gap-2">
                            <DollarSign className="h-4 w-4" />
                            Montant
                        </Label>
                        <Input
                            id="coutCommande"
                            defaultValue={`${depense.montant} FCFA`}
                            className="col-span-3"
                            readOnly
                        />
                    </div>



                </div>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" className="cursor-pointer">Fermer</Button>
                    </DialogClose>
                    <Button type="button" onClick={() => window.print()} variant="destructive" className="cursor-pointer">
                        Imprimer
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}